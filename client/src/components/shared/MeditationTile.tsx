import React from "react";

interface IMeditationTile {
  title: string;
  desc: string;
  duration: number;
  img: string;
  type: string;
  isGrid: boolean;
}
export const MeditationTile: React.FunctionComponent<IMeditationTile> = (
  props
) => {
  return (
    <div
      className={`${
        props.isGrid ? "w-full h-full" : "w-32 md:w-72 xs:w-1/2"
      }  " h-3/5 mt-4 mr-4 xs:mr-4  xs:h-2/3"`}
    >
      <div className="neoShadow h-full p-6">
        <div className="block">
          <div className="font-bold font-mada text-lg w-full leading-5 xs:text-sm text-green-700">
            {props.title}
          </div>
          <p className="font-mada block h-3/4 text-xs w-5/6 mt-1 lg:text-sm overflow-ellipsis overflow-hidden whitespace-no-wrap">
            {props.desc}
          </p>
        </div>
        <div className="block w-full h-full xs:w-1/2">
          <img
            src={`/images/${props.img}`}
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
            <div className="leading-3">{props.duration} mins</div>
            <div className="block ">
              <div className="font-bold ml-2 text-green-700 xs:text-xs">
                Type:
              </div>
              <div className="font-mada ml-1 font-semibold xs:text-xs">
                {props.type}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
