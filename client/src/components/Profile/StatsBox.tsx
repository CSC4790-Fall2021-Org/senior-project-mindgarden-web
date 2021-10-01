import React from "react";

export interface IStatsBox {
  title: String;
  img: string;
  data: String;
}

export const StatsBox: React.FunctionComponent<IStatsBox> = (props) => {
  return (
    <div className="max-w-md w-full mx-auto h-3/4  mt-4 bg-darkWhite rounded p-6 rounded neoShadow">
      <div className="w-full h-full">
        <div className="flex justify-between items-center">
          <div className="flex items-center w-36">
            <div className="rounded-3xl	h-14 w-14 flex items-center justify-center bg-darkWhite neoShadow mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="green"
              >
                <path
                  strokeLinecap="round"
                  strokeWidth={2}
                  d={props.img}
                  className="h-6 w-6"
                />
              </svg>
            </div>
            <div className="text-lg whitespace-nowrap	w-16 text-gray-600 ml-4">
              {props.title}
            </div>
          </div>
          <div className="flex justify-end">
            <div className="font-mada font-bold p-4 text-2xl">{props.data}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
