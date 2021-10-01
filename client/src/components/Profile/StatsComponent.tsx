import React, { useState, useEffect } from "react";
import { StatsBox } from "./StatsBox";
import firebase from "firebase";
import { USER_PREFERENCES } from "../../config/constants";
import { auth } from "../../config/firebase";
import { getProfileData } from "../../services/FirebaseApi";
import { Page } from "../../pages/Profile/ProfilePage";

export interface IStatsComponent {
  goBackTo: React.Dispatch<React.SetStateAction<Page>>;
}

export const StatsComponent: React.FunctionComponent<IStatsComponent> = (
  props
) => {
  const [joinDate, setJoinDate] = useState<String>("");
  const [totalMins, setTotalMins] = useState<Number>(1);
  const [totalSessions, setTotalSessions] = useState<Number>(1);

  async function getData() {
    const db = firebase.firestore();

    await db
      .collection(USER_PREFERENCES)
      .doc(auth.currentUser?.email || "")
      .get()
      .then((doc) => {
        if (doc.exists) {
          let fbData = doc.data() ?? {};
          let dateJoined = fbData["joinDate"];
          let totalMins = fbData["totalMins"];
          let totalSessions = fbData["totalSessions"];
          setJoinDate(dateJoined);
          setTotalMins(totalMins);
          setTotalSessions(totalSessions);
        }
      });
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="w-full max-w-md mx-auto mt-8 flex justify-between">
        <div className="text-leading font-mada text-3xl font-bold ml-4">
          Stats
        </div>
        <button
          className="mr-4"
          onClick={() => {
            props.goBackTo(Page.Profile);
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
      </div>
      <StatsBox
        title={"Date Joined: "}
        img={
          "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        }
        data={joinDate}
      />
      <StatsBox
        title={"Total Time Meditated: "}
        img={"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"}
        data={String(totalMins)}
      />
      <StatsBox
        title={"Total Meditation Sessions: "}
        img={"M13 10V3L4 14h7v7l9-11h-7z"}
        data={String(totalSessions)}
      />
    </div>
  );
};
