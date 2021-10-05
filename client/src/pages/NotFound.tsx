import React from "react";
import coloredPots from "../images/coloredPots.svg";

export const NotFound: React.FunctionComponent = () => {
  return (
    <div className="container h-screen mx-auto mt-32">
      <div className="flex justify-center">
        <h1 className="text-4xl font-mada font-semibold text-red-500">
          404 Error. Page Not Found!
        </h1>
      </div>
      <div className="flex justify-center mt-5">
        <img src={coloredPots} alt="Colored Plants" />
      </div>
    </div>
  );
};
