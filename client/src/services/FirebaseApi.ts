import firebase from "firebase";
import { auth } from "../config/firebase";
import { USER_PREFERENCES } from "../config/constants";
import { UserType } from "../interfaces/User";
import { PlantType } from "../Models/Plant";

const db = firebase.firestore();

export const buyPlant = async (
  user: UserType,
  setUser: React.Dispatch<React.SetStateAction<UserType>>,
  plant: PlantType
) => {
  await db
    .collection(USER_PREFERENCES)
    .doc(auth.currentUser?.email || "")
    .update({
      coins: user.coins,
      plants: user.ownedPlants,
    });
};
