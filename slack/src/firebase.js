// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "slack-clone-33203.firebaseapp.com",
  projectId: "slack-clone-33203",
  storageBucket: "slack-clone-33203.appspot.com",
  messagingSenderId: "621671539235",
  appId: "1:621671539235:web:0402a2d00aafef730a0796",
  measurementId: "G-EBF60GZCQS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
