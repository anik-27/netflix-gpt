// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC71yLB0LBLVboywI4LewIDM0mWUUVqWNE",
  authDomain: "netflix-gpt-27dba.firebaseapp.com",
  projectId: "netflix-gpt-27dba",
  storageBucket: "netflix-gpt-27dba.appspot.com",
  messagingSenderId: "975658700644",
  appId: "1:975658700644:web:29e0a922758ade7633f471",
  measurementId: "G-QGP8JC8JQZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
