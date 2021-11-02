// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = initializeApp({
  apiKey: "AIzaSyAMlOm0yCRa6EZ5dIHl1pNir6GpjVJCamo",
  authDomain: "react-firebase-chat-56b07.firebaseapp.com",
  projectId: "react-firebase-chat-56b07",
  storageBucket: "react-firebase-chat-56b07.appspot.com",
  messagingSenderId: "1066955710824",
  appId: "1:1066955710824:web:7e344bf230b3cd743db6dd",
  measurementId: "G-L21MBWSQ0L",
});

// Initialize Firebase
export const auth = getAuth(app);
export const db = getFirestore();
