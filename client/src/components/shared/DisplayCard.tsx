import React from "react";
import redTulipPacket from "../../images/redTulipPacket.svg";
import { motion } from "framer-motion";
import { PlantType } from "../../Models/Plant";

interface IDisplayCard {
  handleOpen: () => void;
  plant: PlantType;
}

export const DisplayCard: React.FunctionComponent<IDisplayCard> = (props) => {
  return (
    <motion.button
      onClick={props.handleOpen}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="justify-center h-80 neoShadow items-center flex-col">
        <img
          src={props.plant.packetImage}
          alt="Red Tulips Packet"
          className="xl:w-7/12 lg:w-7/12 md:w-1/2 sm:2/5 xs:w-1/3"
        />
        <div className="flex justify-start w-full">
          <div className="font-mada font-bold text-gray-700 text-2xl ml-6">
            {props.plant.title}
          </div>
        </div>
        <div className="flex w-full justify-start ml-12">
          <img src={"/images/coin.svg"} alt="coin" className="w-6" />
          <div className="font-mada font-semibold text-gray-700 text-2xl w-1/4 justify-start">
            {props.plant.price}
          </div>
        </div>
      </div>
    </motion.button>
  );
};
