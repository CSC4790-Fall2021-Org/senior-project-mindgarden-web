import React, { useEffect, useState, useRef } from "react";
import { Meditation } from "../../Models/Meditation";
import { Redirect, useLocation, useHistory } from "react-router-dom";
import { Page } from "../Profile/ProfilePage";
import { motion } from "framer-motion";

export interface IPlay {
  title: string;
  meditation: Meditation;
}

export const PlayPage = (props: History) => {
  const [audio] = useState(
    new Audio(
      "https://mcdn.podbean.com/mf/web/2aysdh/358_Experience_Confidence_VOCALS64r7q.mp3"
    )
  );
  const [data, setData] = useState<IPlay>();
  const [isPlaying, setIsPlaying] = useState<Boolean>(false);
  const [trackProgress, setTrackProgress] = useState<number>(0);
  const intervalRef = useRef();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    let data: IPlay = location.state as IPlay;
    setData(data);
  }, [location]);

  useEffect(() => {
    isPlaying ? audio.play() : audio.pause();
    console.log(isPlaying, "gochild", audio.duration);
  }, [isPlaying]);

  useEffect(() => {
    audio.addEventListener("ended", () => setIsPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setIsPlaying(false));
    };
  }, []);

  const onScrub = (value) => {
    // Clear any timers already running
    clearInterval(audio.currentTime);
    audio.currentTime = value;
    setTrackProgress(audio.currentTime);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    // startTimer();
  };
  const currentPercentage = audio.duration
    ? `${(trackProgress / audio.duration) * 100}%`
    : "0%";
  const trackStyling = `
  -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #008001), color-stop(${currentPercentage}, #f5f5f5))
  
`;

  return (
    <div>
      <div className="h-screen flex items-center justify-center flex-col content-around w-full gap-44">
        <div className="flex justify-center w-1/2 justify-evenly">
          <button
            className="mr-4"
            onClick={() => {
              history.goBack();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 m-4  mr-4"
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
          <div className="font-mada text-2xl text-gray-700 flex justify-center items-center font-bold">
            Meditation
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 m-4 ml-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#f5f5f5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </div>
        <input
          type="range"
          value={trackProgress}
          step="1"
          min="0"
          max={audio.duration === NaN ? "500" : audio.duration}
          className="progress w-1/3 h-4 nmShadow bg-darkWhite"
          onChange={(e) => onScrub(e.target.value)}
          onMouseUp={onScrubEnd}
          onKeyUp={onScrubEnd}
          style={{ background: trackStyling }}
        />
        {/* Controls */}
        <div className="flex items-center justify-center w-1/2 justify-evenly">
          <motion.button
            onClick={() => {
              audio.currentTime = audio.currentTime - 15;
              setTrackProgress(audio.currentTime);
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="rounded-full h-20 w-20 flex items-center justify-center nmShadow mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="green"
              >
                <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" />
              </svg>
            </div>
          </motion.button>
          <motion.button
            onClick={() => setIsPlaying(!isPlaying)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="rounded-full h-24 w-24 flex items-center justify-center nmShadow mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                viewBox="0 0 20 20"
                fill="green"
              >
                {isPlaying ? (
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                )}
              </svg>
            </div>
          </motion.button>
          <motion.button
            onClick={() => {
              setTrackProgress(audio.currentTime);
              audio.currentTime = audio.currentTime + 15;
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="rounded-full h-20 w-20 flex items-center justify-center nmShadow mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="green"
              >
                <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z" />
              </svg>
            </div>
          </motion.button>
        </div>
      </div>
    </div>
  );
};
