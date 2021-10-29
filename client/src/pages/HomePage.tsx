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
        <div className="flex flex-col items-center justify-center drawer-content">
          <label
            htmlFor="my-drawer-2"
            className="mb-4 btn btn-primary drawer-button lg:hidden"
          >
            open menu
          </label>
          <div className="hidden text-xs text-center lg:block">
            Menu is always open on desktop size.
            <br />
            Resize the browser to see toggle button on mobile size
          </div>
          <div className="text-xs text-center lg:hidden">
            Menu can be toggled on mobile size.
            <br />
            Resize the browser to see fixed sidebar on desktop size
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
          <ul className="menu p-4 overflow-y-auto w-80 text-base-content rounded-3xl shadow-2xl ">
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
