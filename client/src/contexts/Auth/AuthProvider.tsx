import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import firebase from "firebase/app";
import { auth } from "../../config/firebase";
import logging from "../../config/logging";

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null>(null);
  // /whenever we sign in, create an account, or sign out it will set the state of our user accordingly.
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      if(firebaseUser) {
          logging.info("user detected.");
      } else {
          logging.info("no user detected.")
      }
      setUser(firebaseUser);
    });

    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};