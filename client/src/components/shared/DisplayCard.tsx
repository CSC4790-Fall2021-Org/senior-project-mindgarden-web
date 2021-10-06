import React from "react";
import redTulipPacket from "../../images/redTulipPacket.svg";
import coin from "../../images/coin.svg";
import { motion } from "framer-motion";

interface IDisplayCard {
  handleOpen: () => void;
}

export const DisplayCard: React.FunctionComponent<IDisplayCard> = (props) => {
  return (
    <motion.button
      onClick={props.handleOpen}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="justify-center h-80 neoShadow items-center flex-col">
        <img src={redTulipPacket} alt="Red Tulips Packet" className="w-7/12" />
        <div className="font-mada font-bold text-gray-700 text-2xl w-5/6">
          Red Tulips
        </div>
        <div className="flex w-full justify-center -ml-2">
          <img src={coin} alt="coin" className="w-6 mr-2" />
          <div className="font-mada font-semibold text-gray-700 text-2xl w-4/6">
            200
          </div>
        </div>
      </div>
    </motion.button>
  );
};
