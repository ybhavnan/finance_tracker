// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8Aq8aa9Q001yvW0rMpSo8LqlYys-ek6Y",
  authDomain: "finance-tracker-7832b.firebaseapp.com",
  projectId: "finance-tracker-7832b",
  storageBucket: "finance-tracker-7832b.firebasestorage.app",
  messagingSenderId: "924914015519",
  appId: "1:924914015519:web:f4da1fe48bf4c248a6e42a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };