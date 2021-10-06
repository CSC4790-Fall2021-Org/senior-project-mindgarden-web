import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface IModal {
  handleClose: () => void;
  isOpen: Boolean;
}

export const Modal: React.FunctionComponent<IModal> = (props) => {
  const modalVariant = {
    initial: { opacity: 0, transition: { type: "spring" } },
    isOpen: { opacity: 1 },
    exit: { opacity: 0 },
  };
  const containerVariant = {
    initial: { top: "-50%", transition: { type: "spring" } },
    isOpen: { top: "50%" },
    exit: { top: "-50%" },
  };
  return (
    <AnimatePresence>
      {props.isOpen && (
        <motion.div
          className="fixed top-0 left-0 w-screen h-screen bg-gray-700 bg-opacity-80"
          initial={"initial"}
          animate={"isOpen"}
          exit={"exit"}
          variants={modalVariant}
        >
          <motion.div
            className="lg:w-1/4 w-2/5 h-1/2 top-1/2 left-1/2 absolute bg-darkWhite rounded-lg transform -translate-x-1/2 -translate-y-1/2 opacity-100 flex justify-center items-center"
            initial={"initial"}
            animate={"isOpen"}
            exit={"exit"}
            variants={containerVariant}
          >
            <h1 className="">modal1</h1>
            <svg
              onClick={props.handleClose}
              className="w-6 h-6 absolute left-6 top-6 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20.39 20.39"
            >
              <line
                x1="19.39"
                y1="19.39"
                x2="1"
                y2="1"
                fill="none"
                stroke="gray"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
              <line
                x1="1"
                y1="19.39"
                x2="19.39"
                y2="1"
                fill="none"
                stroke="gray"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
