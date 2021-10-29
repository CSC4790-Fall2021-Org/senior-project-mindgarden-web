import { useState, useEffect } from "react";

export type UserType = {
  dateJoined: String;
  name: String;
  ownedPlants: String;
  favorited: Array<Number>;
  coins: Number;
  totalMins: String;
  totalSessions: String;
};

export const useLocalStorageState = (key: string, defaultVal: UserType) => {
  // make piece of state, based off value in local storage
  const [user, setUser] = useState<UserType>(() => {
    let val: UserType;
    try {
      val = JSON.parse(
        window.localStorage.getItem(key) || JSON.stringify(defaultVal)
      );
    } catch (e) {
      console.log(e, "error");
      val = defaultVal;
    }
    return val;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(user));
  }, [user]);

  return [user, setUser];

  // use useEffect to update LocalStorage when state changes
};
