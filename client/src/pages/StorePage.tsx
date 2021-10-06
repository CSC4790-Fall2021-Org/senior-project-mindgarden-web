import React from "react";
import { DisplayCard } from "../components/shared/DisplayCard";
import coin from "../images/coin.svg";

export interface IStorePage {}

export const StorePage: React.FunctionComponent<IStorePage> = () => {
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
        <DisplayCard />
        <div className="justify-center h-80 neoShadow"></div>
        <div className="justify-center h-80 flex bg-red-300 neoShadow">4</div>
        <div className="justify-center h-80 flex bg-red-300 neoShadow">5</div>
        <div className="flex justify-center">6</div>
      </div>
      <div className="flex justify-center mt-5"></div>
    </div>
  );
};
