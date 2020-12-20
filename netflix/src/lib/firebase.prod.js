import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

// seed the database

// config information
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "netflix-clone-3771b.firebaseapp.com",
  databaseURL: "https://netflix-clone-3771b.firebaseio.com",
  projectId: "netflix-clone-3771b",
  storageBucket: "netflix-clone-3771b.appspot.com",
  messagingSenderId: "143773800916",
  appId: "1:143773800916:web:23acd5fd8f4fe7cd015e41",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
