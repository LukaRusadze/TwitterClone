import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbbsGgOikMOWDhlwmgiMSXugQ9UYcOhxk",
  authDomain: "twitterclone-b08c5.firebaseapp.com",
  projectId: "twitterclone-b08c5",
  storageBucket: "twitterclone-b08c5.appspot.com",
  messagingSenderId: "758504965661",
  appId: "1:758504965661:web:a701b8f557c494041ca8f4",
  measurementId: "G-C200SXVMZ3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore();

export const colRef = collection(db, "users");
