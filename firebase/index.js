// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA_VRtMcY0WJE6JY8q71Xtuxf53SjMX554",
  authDomain: "denizensfeeds-49c2c.firebaseapp.com",
  projectId: "denizensfeeds-49c2c",
  storageBucket: "denizensfeeds-49c2c.appspot.com",
  messagingSenderId: "596931531563",
  appId: "1:596931531563:web:b0c0f280b27e17a9ed2b6e",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export default db;
