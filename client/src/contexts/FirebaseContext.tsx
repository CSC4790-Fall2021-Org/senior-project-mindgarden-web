import React, { useState, createContext, useEffect } from "react";
import firebase from "firebase";

import { UserType } from "../interfaces/User";
import { USER_PREFERENCES } from "../config/constants";
import { auth } from "../config/firebase";
import { useLocalStorageState } from "../interfaces/User";

type IFirebaseProvider = {
  user: UserType | React.Dispatch<React.SetStateAction<UserType>>;
  fetchAllData: () => void;
};

var defaultFetch = () => {};

var defaultUser = {
  dateJoined: "",
  name: "",
  ownedPlants: "",
  favorited: [],
  coins: 0,
  totalMins: "",
  totalSessions: "",
};

export const FirebaseContext = React.createContext<IFirebaseProvider>({
  user: defaultUser,
  fetchAllData: defaultFetch,
});

export const FirebaseProvider: React.FunctionComponent = (props) => {
  var [user, setUser] = useLocalStorageState("user", {
    dateJoined: "",
    name: "",
    ownedPlants: "",
    favorited: [],
    coins: 0,
    totalMins: "",
    totalSessions: "",
  });

  const db = firebase.firestore();

  useEffect(() => {}, []);

  const fetchAllData = async (): Promise<void> => {
    console.log("calling this");
    await db
      .collection(USER_PREFERENCES)
      .doc(auth.currentUser?.email || "")
      .get()
      .then((doc) => {
        if (doc.exists) {
          let fbData = doc.data() ?? {};
          let updatedUser: UserType = {
            dateJoined: "",
            name: "",
            ownedPlants: "",
            favorited: [],
            coins: 0,
            totalMins: "",
            totalSessions: "",
          };
          updatedUser.dateJoined = fbData["joinDate"];
          updatedUser.coins = fbData["coins"];
          updatedUser.totalMins = fbData["totalMins"];
          updatedUser.totalSessions = fbData["totalSessions"];
          updatedUser.name = fbData["name"];
          setUser = setUser as React.Dispatch<React.SetStateAction<UserType>>;
          setUser(updatedUser);
        }
      });
  };

  return (
    <FirebaseContext.Provider value={{ user, fetchAllData }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
