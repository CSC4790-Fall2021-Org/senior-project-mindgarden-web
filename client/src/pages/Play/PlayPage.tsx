import React, { useEffect, useState } from "react";
import { Meditation } from "../../Models/Meditation";
import { Redirect, useLocation, useHistory } from "react-router-dom";
import { Page } from "../Profile/ProfilePage";

export interface IPlay {
  title: string;
  meditation: Meditation;
}

export const PlayPage = (props: History) => {
  const [data, setData] = useState<IPlay>();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    let data: IPlay = location.state as IPlay;
    setData(data);
  }, [location]);

  return (
    <div>
      <button
        className="mr-4"
        onClick={() => {
          history.goBack();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="green"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </button>
      {data?.title}
    </div>
  );
};
