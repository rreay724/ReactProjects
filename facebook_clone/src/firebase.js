// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCxiqVGMS21N6tux8jI9DMfJn3DBW76M-E",
  authDomain: "facebook-clone-c4981.firebaseapp.com",
  projectId: "facebook-clone-c4981",
  storageBucket: "facebook-clone-c4981.appspot.com",
  messagingSenderId: "390781303696",
  appId: "1:390781303696:web:d3d04fe945b7b9a3465115",
  measurementId: "G-LN9H8BTD6R",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
