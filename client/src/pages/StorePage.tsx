import React, { useState, useEffect, useContext } from "react";

import { DisplayCard } from "../components/shared/DisplayCard";
import coin from "../images/coin.svg";
import redTulipPacket from "../images/redTulipPacket.svg";
import { Modal } from "../components/shared/Modal";
import { motion } from "framer-motion";
import { plants, PlantType } from "../Models/Plant";
import { buyPlant } from "../services/FirebaseApi";
import { FirebaseContext } from "../contexts/FirebaseContext";
import { UserType } from "../interfaces/User";
import { url } from "inspector";

export interface IStorePage {}

export interface IBuyModal {
  toggleOkay: () => void;
  plant: PlantType;
}
export interface IOkayModal {
  toggleOkay: () => void;
}

const BuyModal: React.FunctionComponent<IBuyModal> = (props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold font-mada text-2xl p-4 text-center absolute xl:left-26 top-1">
        {props.plant.title}
      </h1>
      <img
        src={props.plant.packetImage}
        alt="red tulip packet"
        className="w-40 mt-8"
      />
      <div className="flex text-center font-mada text-gray-800  p-4 px-8">
        {props.plant.description}
      </div>
      <div className="w-36">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.9 }}
          className="h-10 bg-green-600 neoShadow justify-center items-center"
          onClick={props.toggleOkay}
        >
          <div className="flex">
            <div className="font-mada font-bold text-white pr-2">Buy</div>
            <img src={"/images/coin.svg"} alt="coin" className="w-4" />
            <div className="font-mada text-white pl-1 text-l">
              {props.plant.price}
            </div>
          </div>
        </motion.button>
      </div>
    </div>
  );
};

const OkayModal: React.FunctionComponent<IOkayModal> = (props) => {
  return (
    <div className="flex flex-col justify-center items-center -mt-8">
      <div className="flex text-center font-mada text-gray-800 p-8 font-bold">
        Purchase successful! Check the home page, and tap plant select to change
        your default plant.
      </div>
      <div className="w-1/2">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.9 }}
          className="h-10 bg-green-600 neoShadow justify-center items-center"
          onClick={props.toggleOkay}
        >
          <div className="font-mada font-bold text-white">Okay!</div>
        </motion.button>
      </div>
    </div>
  );
};

export const StorePage: React.FunctionComponent<IStorePage> = () => {
  const [isOpen, toggle] = useState(false);
  const [isOkayOpen, toggleOkay] = useState<boolean>(false);
  const [selectedPlant, togglePlant] = useState<PlantType>(plants[0]);
  const { user, setUser } = useContext(FirebaseContext);

  let usr = user as UserType;

  useEffect(() => {
    // check to see what plants user has
    console.log(usr.ownedPlants, "no one");
  }, []);

  function handleOpenModal(open: boolean, plant: PlantType) {
    togglePlant(plant);
    toggle(open);
  }

  function handleOpenOkay(close: boolean, plant: PlantType) {
    let setUsr = setUser as React.Dispatch<React.SetStateAction<UserType>>;
    if (usr.coins > plant.price) {
      buyPlant(usr, setUsr, plant);
      usr.coins = usr.coins - plant.price;
      usr.ownedPlants.push(plant.title);
      setUsr(usr);
    }
    toggle(false);
    toggleOkay(close);
  }
  return (
    <div className="container h-screen mx-auto">
      <div className="flex justify-center">
        <h1 className="text-4xl font-mada font-semibold text-gray-700">
          {`🌻 Seed Shop, You have: ${usr.coins} 🪙`}
        </h1>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-8 mt-16 2xl:mx-60">
        {plants.map((plant) => (
          <DisplayCard
            key={plant.title}
            plant={plant}
            handleOpen={() =>
              usr.ownedPlants.filter((p) => p == plant.title).length > 0
                ? null
                : handleOpenModal(true, plant)
            }
            isBought={
              usr.ownedPlants.filter((p) => p == plant.title).length > 0
            }
          />
        ))}
      </div>
      <Modal
        isOpen={isOpen}
        handleClose={() => handleOpenModal(false, plants[0])}
        size={"xl:w-1/4 lg:w-2/5 w-2/5 xs:w-4/5 h-3/5 xs:h-2/3"}
        isOkay={false}
      >
        <BuyModal
          toggleOkay={() => handleOpenOkay(true, selectedPlant)}
          plant={selectedPlant}
        />
      </Modal>
      <Modal
        isOpen={isOkayOpen}
        handleClose={() => toggleOkay(false)}
        size={"h-1/4 w-1/4 xs:h-1/4 xs:w-2/3"}
        isOkay={true}
      >
        <OkayModal toggleOkay={() => toggleOkay(false)} />
      </Modal>
      <div className="flex justify-center mt-5"></div>
    </div>
  );
};
