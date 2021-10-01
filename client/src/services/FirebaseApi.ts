import firebase from "firebase";
import { USER_PREFERENCES } from "../config/constants";
import { auth } from "../config/firebase";

const db = firebase.firestore();

export const getProfileData = async () => {
  let retArray: Array<String> = [];
  let collection = db.collection(USER_PREFERENCES);
  const data = await collection
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
