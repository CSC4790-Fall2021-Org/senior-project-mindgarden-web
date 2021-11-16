import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { LogoutButton } from "../components/Authentication/LogoutButton";
import { motion } from "framer-motion";
import { FirebaseContext } from "../contexts/FirebaseContext";
import { MeditationTile } from "../components/shared/MeditationTile";
import { Category, Meditation, meditations, Type } from "../Models/Meditation";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();

  const [isChecked, setIsChecked] = useState(false);
  const [category, setCategory] = useState("home");
  const { user, fetchAllData } = useContext(FirebaseContext);
  const [recentMeds, setRecentMeds] = useState<Array<Meditation>>();
  const [favMeds, setFavMeds] = useState<Array<Meditation>>();
  const [meds, setMeds] = useState<Array<Meditation>>();

  useEffect(() => {
    fetchAllData();
    const meds = meditations.slice(3, 7);
    setRecentMeds(meds);
    const favMeds = meditations.slice(6, 12);
    setFavMeds(favMeds);
    setMeds(meditations);
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
        {/* Featured */}
        {category === "home" ? (
          <div className="flex flex-col items-center drawer-content">
            <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-4 xs:gap-2 w-full lg:px-24 md:px-12 px-4 h-1/2 mt-8 lg:gap-x-8 flex xs:justify-center">
              <div className="col-span-2 neoShadow lg:h-1/2 md:h-3/5 h-full p-6 relative">
                <div className="block">
                  <div className="font-bold font-mada lg:text-4xl md:text-4xl text-2xl w-3/4">
                    Open-Ended Meditation
                  </div>
                </div>
                <img
                  src="/images/cloud.svg"
                  alt="cloud"
                  className="w-2/5 pt-8 absolute left-1/2 bottom-4  right xs:w-1/3"
                />
              </div>
              <div className="col-span-1 lg:h-1/2 md:h-3/5 h-full  flex-col justify-between neoShadow p-4">
                <div>
                  <div className="font-mada text-3xl font-semibold text-green-700 ">
                    Featured
                  </div>
                  <div className="font-mada lg:text-sm text-xs">
                    loorem ipsum loorem ipsum loorem ipsum loorem ipsumloorem
                    ipsum loorem ipsum loorem ipsum loorem ipsum loorem ipsum
                    loorem ipsum loorem ipsum
                  </div>
                </div>
                <div className="font-mada font-semibold text-lg flex items-center">
                  20
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div className="text-sm ml-1">mins</div>
                  <div className="font-bold ml-2 text-green-700">Type:</div>
                  <div className="font-mada ml-1 font-semibold">Course</div>
                </div>
              </div>
              <div className="col-span-1 lg:h-1/2 md:h-3/5 h-full justify-center flex flex-col">
                <label
                  htmlFor="my-drawer-2"
                  className="mb-4 btn btn-primary drawer-button lg:hidden"
                >
                  Categories
                </label>
                <motion.button
                  onClick={() =>
                    history.push({
                      pathname: "play",
                      state: { title: "bing", meditation: meditations[0] },
                    })
                  }
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="flex flex-col neoShadow items-center p-4 justify-center">
                    <div className="text-2xl font-semibold font-mada">
                      Play Meditation
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-1/2 w-1/2"
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
                </motion.button>
              </div>
            </div>

            <div className="flex justify-start items-start h-1/2 w-full lg:px-24 md:px-12 px-4 xs:mt-4 -mt-40 flex-col ">
              <div className="font-bold font-mada text-3xl -mb-4 ">
                ⏮ Recent
              </div>
              <div className="flex w-full justify-start items-start">
                {recentMeds?.map((med) => (
                  <motion.button
                    onClick={() => console.log("bing")}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.9 }}
                    className={`${"w-full md:w-full xs:w-full"}  " h-full mr-4 xs:mr-4 justify-start"`}
                  >
                    <MeditationTile med={med} isGrid={false} />
                  </motion.button>
                ))}
              </div>
              <div className="font-bold font-mada text-3xl mt-8">
                💚 Favorited
              </div>
              <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 xs:gap-2 w-full auto-rows-fr items-start row-span-full grid-rows-2 h-5/6 pb-12">
                {favMeds?.map((med) => (
                  <motion.button
                    onClick={() => console.log("bing")}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.9 }}
                    className={`${"w-full h-full"}  " h-4/5 mt-4 mr-4 xs:mr-4  xs:h-2/3"`}
                  >
                    <MeditationTile med={med} isGrid={true} />
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center drawer-content w-full">
            <div
              className={`grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 xs:gap-2 w-full items-start px-16 pb-8 xs:px-0 ${
                (meds?.length ?? 0) <= 6
                  ? (meds?.length ?? 0) <= 4
                    ? "h-1/2 row-span-2 grid-rows-2 auto-rows-fr "
                    : "h-1/2 auto-rows-fr "
                  : "h-full row-span-1 auto-rows-fr xs:auto-rows-max"
              } xs:h-full`}
            >
              {meds?.map((med) => (
                <motion.button
                  onClick={() => console.log("bing")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.9 }}
                  className={`${"w-full h-full"}  " h-4/5 mt-4 mr-4 xs:mr-4  xs:h-2/3"`}
                >
                  <MeditationTile med={med} isGrid={true} />
                </motion.button>
              ))}
            </div>
          </div>
        )}
        {/* Drawer */}
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
                className={
                  "h-10 justify-center items-center neoShadow font-mada mt-4 border-2 border-green-700" +
                  (category === "home" ? "border-yellow-700" : "")
                }
                onClick={() => setCategory("home")}
              >
                {" "}
                <div
                  className={
                    "w-32 justify-start flex font-semibold text-gray-600" +
                    (category === "home" ? " text-green-700" : "")
                  }
                >
                  🏠&nbsp;&nbsp;&nbsp;&nbsp;Home
                </div>
              </motion.button>
            </li>
            <li>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.9 }}
                className={
                  "h-10 justify-center items-center neoShadow font-mada mt-4 border-2 border-green-700" +
                  (category === "all" ? "border-yellow-700" : "")
                }
                onClick={() => {
                  setCategory("all");
                  setMeds(meditations);
                }}
              >
                <div
                  className={
                    "w-30 justify-start flex font-semibold text-gray-600" +
                    (category === "all" ? " text-green-700" : "")
                  }
                >
                  🧘‍♂️ &nbsp;&nbsp;All Meditations
                </div>
              </motion.button>
            </li>
            <li>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.9 }}
                className={
                  "h-10 justify-center items-center neoShadow font-mada mt-4 border-2 border-green-700" +
                  (category === "Courses" ? "border-yellow-700" : "")
                }
                onClick={() => {
                  setCategory("Courses");
                  setMeds(
                    meditations.filter((med) => med.type === Type.course)
                  );
                }}
              >
                {" "}
                <div
                  className={
                    "w-32 justify-start flex font-semibold text-gray-600" +
                    (category === "Courses" ? " text-green-700" : "")
                  }
                >
                  👨‍🏫&nbsp;&nbsp;&nbsp;&nbsp;Courses
                </div>
              </motion.button>
            </li>
            <li>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.9 }}
                className={
                  "h-10 justify-center items-center neoShadow font-mada mt-4 border-2 border-green-700" +
                  (category === "Unguided" ? "border-yellow-700" : "")
                }
                onClick={() => {
                  setMeds(
                    meditations.filter(
                      (med) => med.category === Category.unguided
                    )
                  );
                  setCategory("Unguided");
                }}
              >
                {" "}
                <div
                  className={
                    "w-32 justify-start flex font-semibold text-gray-600" +
                    (category === "Unguided" ? " text-green-700" : "")
                  }
                >
                  🕒&nbsp;&nbsp;&nbsp;&nbsp;Unguided
                </div>
              </motion.button>
            </li>
            <li>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.9 }}
                className={
                  "h-10 justify-center items-center neoShadow font-mada mt-4 border-2 border-green-700" +
                  (category === "Sleep" ? "border-yellow-700" : "")
                }
                onClick={() => {
                  setMeds(
                    meditations.filter((med) => med.category === Category.sleep)
                  );
                  setCategory("Sleep");
                }}
              >
                <div
                  className={
                    "w-32 justify-start flex font-semibold text-gray-600" +
                    (category === "Sleep" ? " text-green-700" : "")
                  }
                >
                  🌜&nbsp;&nbsp;&nbsp;&nbsp;Sleep
                </div>
              </motion.button>
            </li>
            <li>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.9 }}
                className={
                  "h-10 justify-center items-center neoShadow font-mada mt-4 border-2 border-green-700" +
                  (category === "Focus" ? "border-yellow-700" : "")
                }
                onClick={() => {
                  setMeds(
                    meditations.filter((med) => med.category === Category.focus)
                  );
                  setCategory("Focus");
                }}
              >
                {" "}
                <div
                  className={
                    "w-32 justify-start flex font-semibold text-gray-600" +
                    (category === "Focus" ? " text-green-700" : "")
                  }
                >
                  🔎 &nbsp;&nbsp;Focus
                </div>
              </motion.button>
            </li>
            <li>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.9 }}
                className={
                  "h-10 justify-center items-center neoShadow font-mada mt-4 border-2 border-green-700" +
                  (category === "Anxiety" ? "border-yellow-700" : "")
                }
                onClick={() => {
                  setMeds(
                    meditations.filter(
                      (med) => med.category === Category.anxiety
                    )
                  );
                  setCategory("Anxiety");
                }}
              >
                {" "}
                <div
                  className={
                    "w-32 justify-start flex font-semibold text-gray-600" +
                    (category === "Anxiety" ? " text-green-700" : "")
                  }
                >
                  😥 &nbsp;&nbsp;Anxiety
                </div>
              </motion.button>
            </li>
            <li>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.9 }}
                className={
                  "h-10 justify-center items-center neoShadow font-mada mt-4 border-2 border-green-700" +
                  (category === "Growth" ? "border-yellow-700" : "")
                }
                onClick={() => {
                  setMeds(
                    meditations.filter(
                      (med) => med.category === Category.growth
                    )
                  );
                  setCategory("Growth");
                }}
              >
                {" "}
                <div
                  className={
                    "w-32 justify-start flex font-semibold text-gray-600" +
                    (category === "Growth" ? " text-green-700" : "")
                  }
                >
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
