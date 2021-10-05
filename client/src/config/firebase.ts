// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// TODO create process.env 
const firebaseConfig = {
  apiKey: "AIzaSyDhk31WWimocu6AQaxnsIMq63eJ7F7xP5A",
  authDomain: "mindgarden-b9527.firebaseapp.com",
  projectId: "mindgarden-b9527",
  storageBucket: "mindgarden-b9527.appspot.com",
  messagingSenderId: "201784826107",
  appId: "1:201784826107:web:4675e650b885cb7895b85e",
  measurementId: "G-1WGY1LL3WL"
};

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);


export const Providers = {
  google: new firebase.auth.GoogleAuthProvider() 
}

export const auth = firebase.auth(); 
export default Firebase; 

// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }