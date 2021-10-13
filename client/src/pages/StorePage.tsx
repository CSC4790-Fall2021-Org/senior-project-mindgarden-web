import React, { useState } from "react";

import { DisplayCard } from "../components/shared/DisplayCard";
import coin from "../images/coin.svg";
import redTulipPacket from "../images/redTulipPacket.svg";
import { Modal } from "../components/shared/Modal";
import { motion } from "framer-motion";

export interface IStorePage {}

export interface IBuyModal {
  toggleOkay: () => void;
}
export interface IOkayModal {
  toggleOkay: () => void;
}

const BuyModal: React.FunctionComponent<IBuyModal> = (props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold font-mada text-2xl p-4 text-center absolute xl:left-26 top-1">
        Red Tulip
      </h1>
      <img src={redTulipPacket} alt="red tulip packet" className="w-40 mt-8" />
      <div className="flex text-center font-mada text-gray-800  p-4 px-8">
        Control the opacity of an element’s text color using the text-opacity-
        utilities.
      </div>
      <div className="w-24">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.9 }}
          className="h-10 bg-green-600 neoShadow justify-center items-center"
          onClick={props.toggleOkay}
        >
          <div className="font-mada font-bold text-white">Buy</div>
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
  const [isOkayOpen, toggleOkay] = useState(false);

  function handleOpenModal(open: boolean) {
    toggle(open);
  }

  function handleOpenOkay(close: boolean) {
    toggle(false);
    toggleOkay(close);
  }
  return (
    <div className="container h-screen mx-auto">
      <div className="flex justify-center">
        <h1 className="text-4xl font-mada font-semibold text-gray-700">
          🌻 Seed Shop
        </h1>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 gap-8 mt-16 2xl:mx-60">
        <div className="justify-center h-80 w-1/6 flex bg-red-300 neoShadow">
          1
        </div>
        <DisplayCard handleOpen={() => handleOpenModal(true)} />
        <div className="justify-center h-80 neoShadow"></div>
        <div className="justify-center h-80 flex bg-red-300 neoShadow">4</div>
        <div className="justify-center h-80 flex bg-red-300 neoShadow">5</div>
        <div className="flex justify-center">6</div>
      </div>
      <Modal
        isOpen={isOpen}
        handleClose={() => handleOpenModal(false)}
        size={"xl:w-1/4 lg:w-2/5 w-2/5 xs:w-3/5 h-1/2"}
        isOkay={false}
      >
        <BuyModal toggleOkay={() => handleOpenOkay(true)} />
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
