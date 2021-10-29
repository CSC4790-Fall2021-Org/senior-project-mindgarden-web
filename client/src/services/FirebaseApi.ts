import firebase from "firebase";
import { auth } from "../config/firebase";
import { USER_PREFERENCES } from "../config/constants";

const db = firebase.firestore();

export const fetchAllData = async () => {
  let retArray: Array<String> = [];
  await db
    .collection(USER_PREFERENCES)
    .doc(auth.currentUser?.email || "")
    .get()
    .then((doc) => {
      if (doc.exists) {
        let fbData = doc.data() ?? {};
        let dateJoined = fbData["joinDate"];
        console.log("calling func2", dateJoined);
        retArray.push(dateJoined);
        return retArray;
      }
    });
};
