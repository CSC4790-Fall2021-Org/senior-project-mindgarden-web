import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { LogoutButton } from "../components/Authentication/LogoutButton";
import { motion } from "framer-motion";
import { FirebaseContext } from "../contexts/FirebaseContext";

const HomePage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { user, fetchAllData } = useContext(FirebaseContext);
  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <div className="container h-screen w-screen">
      <div className="bg-darkWhite drawer drawer-mobile h-screen w-screen">
        <input
          id="my-drawer-2"
          type="checkbox"
          className="drawer-toggle"
          onChange={(event) => setIsChecked(event.currentTarget.checked)}
          checked={isChecked}
        />
        <div className="flex flex-col items-center drawer-content">
          {/* Featured */}
          <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-4 w-full lg:px-24 md:px-12 px-4 h-1/2 mt-8 lg:gap-x-16">
            <div className="col-span-2 neoShadow lg:h-1/2 md:h-3/5 h-full lg:p-8 p-4">
              <div className="block">
                <div className="font-bold font-mada text-3xl">
                  Open-Ended Meditation
                </div>
                <div className="font-mada text-2xl">Featured</div>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-1/2 w-1/2 neoShadow"
                  viewBox="0 0 20 20"
                  fill="green"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="col-span-1">3</div>
            <div className="col-span-1">
              <label
                htmlFor="my-drawer-2"
                className="mb-4 btn btn-primary drawer-button lg:hidden"
              >
                Categories
              </label>
              4
            </div>
          </div>
        </div>
        <div className="drawer-side shadow-2xl bg-darkWhite w-full rounded-3xl drop-shadow ">
          <label
            htmlFor="my-drawer-2"
            className="drawer-overlay"
            ref={(el) => {
              if (el && isChecked) {
                el.style.setProperty(
                  "background-color",
                  "#F4F4F4",
                  "important"
                );
              }
            }}
          ></label>
          <ul className="menu p-4 overflow-y-auto w-80 text-base-content rounded-3xl shadow-2xl bg-darkWhite ">
            <li>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.9 }}
                className="active:bg-green-700 h-10 justify-center items-center neoShadow font-mada mt-4 border-2 border-green-700"
              >
                <div
                  className="w-30
                 justify-start flex font-semibold text-green-700"
                >
                  🧘‍♂️ &nbsp;&nbsp;All Meditations
                </div>
              </motion.button>
            </li>
            <li>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.9 }}
                className="active:bg-green-700 h-10 justify-center items-center neoShadow font-mada mt-4 border-2 border-green-700"
              >
                {" "}
                <div className="w-32 justify-start flex font-semibold text-green-700">
                  👨‍🏫&nbsp;&nbsp;&nbsp;&nbsp;Courses
                </div>
              </motion.button>
            </li>
            <li>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.9 }}
                className="active:bg-green-700 h-10 justify-center items-center neoShadow font-mada mt-4 border-2 border-green-700"
              >
                {" "}
                <div className="w-32 justify-start flex font-semibold text-green-700">
                  🕒&nbsp;&nbsp;&nbsp;&nbsp;Unguided
                </div>
              </motion.button>
            </li>
            <li>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.9 }}
                className="active:bg-green-700 h-10 justify-center items-center neoShadow font-mada mt-4 border-2 border-green-700"
              >
                <div className="w-32 justify-start flex font-semibold text-green-700">
                  🌜&nbsp;&nbsp;&nbsp;&nbsp;Sleep
                </div>
              </motion.button>
            </li>
            <li>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.9 }}
                className="active:bg-green-700 h-10 justify-center items-center neoShadow font-mada mt-4 border-2 border-green-700"
              >
                {" "}
                <div className="w-32 justify-start flex font-semibold text-green-700">
                  🔎 &nbsp;&nbsp;Focus
                </div>
              </motion.button>
            </li>
            <li>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.9 }}
                className="active:bg-green-700 h-10 justify-center items-center neoShadow font-mada mt-4 border-2 border-green-700 text-green-700"
              >
                {" "}
                <div className="w-32 justify-start flex font-semibold">
                  😥 &nbsp;&nbsp;Anxiety
                </div>
              </motion.button>
            </li>
            <li>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.9 }}
                className="active:bg-green-700 h-10 justify-center items-center neoShadow font-mada mt-4 border-2 border-green-700 "
              >
                {" "}
                <div className="w-32 justify-start flex font-semibold text-green-700">
                  🪴&nbsp;&nbsp;Growth
                </div>
              </motion.button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
