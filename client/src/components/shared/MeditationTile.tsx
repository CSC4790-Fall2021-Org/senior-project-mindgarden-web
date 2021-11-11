import { title } from "process";
import React from "react";
import { Meditation, Type } from "../../Models/Meditation";

interface IMeditationTile {
  med: Meditation;
  isGrid: boolean;
}
export const MeditationTile: React.FunctionComponent<IMeditationTile> = (
  props
) => {
  const { title, img, duration, description, type } = props.med;
  return (
    <div
      className={`${
        props.isGrid ? "w-full h-full" : "w-32 md:w-72 xs:w-1/2"
      }  " h-4/5 mt-4 mr-4 xs:mr-4  xs:h-2/3"`}
    >
      <div className="neoShadow h-full p-6">
        <div className="block">
          <div className="font-bold font-mada text-lg w-full leading-5 xs:text-sm text-green-700">
            {title}
          </div>
          <p className="font-mada block h-3/4 text-xs w-5/6 mt-1 lg:text-xs overflow-ellipsis overflow-hidden whitespace-no-wrap">
            {description}
          </p>
        </div>
        <div className="block w-full h-full xs:w-1/2">
          <img
            src={`/images/${img}`}
            alt="bee"
            className="w-full h-5/6 items-end flex justify-end lg:-ml-4"
          />
          <div className="font-mada font-semibold text-xs flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-1"
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
            <div className="leading-3">{Math.round(duration / 60)} mins</div>
            <div className="block ">
              <div className="font-bold ml-2 text-green-700 xs:text-xs">
                Type:
              </div>
              <div className="font-mada ml-1 font-semibold xs:text-xs">
                {type === Type.single ? "single" : "course"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
