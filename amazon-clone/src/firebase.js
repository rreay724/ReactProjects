import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "clone-2d1c5.firebaseapp.com",
  projectId: "clone-2d1c5",
  storageBucket: "clone-2d1c5.appspot.com",
  messagingSenderId: "410859183865",
  appId: "1:410859183865:web:7e90291de1adfadbf38c28",
  measurementId: "G-DJENSCDEM7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
