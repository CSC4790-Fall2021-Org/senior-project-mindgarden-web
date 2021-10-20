import React from "react";
import { Link } from "react-router-dom";
import { LogoutButton } from "../components/Authentication/LogoutButton";

const HomePage = () => {
  return (
    <div className="container h-screen w-screen">
      <div className="bg-darkWhite drawer drawer-mobile h-screen w-screen">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
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
        <div className="drawer-side shadow-2xl bg-darkWhite w-full rounded-3xl drop-shadow">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 text-base-content">
            <li>
              <button className="active:bg-green-700 h-10 justify-center items-center neoShadow font-mada mt-2">
                <div
                  className="w-30
                 justify-start flex"
                >
                  🧘‍♂️ &nbsp;&nbsp;All Meditations
                </div>
              </button>
            </li>
            <li>
              <button className="active:bg-green-700 h-10 items-center mt-4 neoShadow font-mada justify-center">
                <div className="w-32 justify-start flex">
                  👨‍🏫&nbsp;&nbsp;&nbsp;&nbsp;Courses
                </div>
              </button>
            </li>
            <li>
              <button className="active:bg-green-700 h-10 items-center mt-4 neoShadow font-mada justify-center">
                <div className="w-32 justify-start flex">
                  🕒&nbsp;&nbsp;&nbsp;&nbsp;Unguided
                </div>
              </button>
            </li>
            <li>
              <button className="active:bg-green-700 h-10 justify-center items-center mt-4 neoShadow font-mada">
                <div className="w-32 justify-start flex">
                  🌜&nbsp;&nbsp;&nbsp;&nbsp;Sleep
                </div>
              </button>
            </li>
            <li>
              <button className="active:bg-green-700 h-10 justify-center items-center mt-4 neoShadow font-mada">
                <div className="w-32 justify-start flex">
                  🔎 &nbsp;&nbsp;Focus
                </div>
              </button>
            </li>
            <li>
              <button className="active:bg-green-700 h-10 justify-center items-center mt-4 neoShadow font-mada">
                <div className="w-32 justify-start flex">
                  😥 &nbsp;&nbsp;Anxiety
                </div>
              </button>
            </li>
            <li>
              <button className="active:bg-green-700 h-10 justify-center items-center mt-4 neoShadow font-mada">
                <div className="w-32 justify-start flex">
                  🪴&nbsp;&nbsp;Growth
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
