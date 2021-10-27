import React, { useState, createContext, useEffect } from "react";
import { UserType } from "../interfaces/User";

export const FirebaseContext = React.createContext<UserType | undefined>(
  undefined
);
export const FirebaseProvider: React.FunctionComponent = (props) => {
  const [user, setUser] = useState<UserType>();
  useEffect(() => {
    console.log("calling useEffect");
  }, [user]);
  return (
    <FirebaseContext.Provider value={user}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
