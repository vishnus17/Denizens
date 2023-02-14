// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFDmhB7LL1jWd8oofJkGOkJbNopgiB_Vs",
  authDomain: "denizens-cd899.firebaseapp.com",
  projectId: "denizens-cd899",
  storageBucket: "denizens-cd899.appspot.com",
  messagingSenderId: "230221833028",
  appId: "1:230221833028:web:80291b05d5b408dfad2d11",
  measurementId: "G-6GQ26P74CH",
};

// Initialize Firebas
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
