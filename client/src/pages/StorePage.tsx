import React from "react";

export interface IStorePage {}

export const StorePage: React.FunctionComponent<IStorePage> = () => {
  return (
    <div className="container h-screen mx-auto">
      <div className="flex justify-center">
        <h1 className="text-4xl font-mada font-semibold text-gray-700">
          🌻 Seed Shop
        </h1>
      </div>
      <div className="flex justify-center mt-5"></div>
    </div>
  );
};
