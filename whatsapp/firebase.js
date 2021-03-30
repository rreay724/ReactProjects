import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API,
  authDomain: "whatsapp-ee523.firebaseapp.com",
  projectId: "whatsapp-ee523",
  storageBucket: "whatsapp-ee523.appspot.com",
  messagingSenderId: "875850417477",
  appId: "1:875850417477:web:adc736c5ead41840f42a2c",
  measurementId: "G-X90C0E4FJ4",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
