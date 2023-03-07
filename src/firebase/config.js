import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCi1hxGfOVH1U7U6lA8jTBINEzrdsHi_TY",
  authDomain: "to-do-app-6fab0.firebaseapp.com",
  projectId: "to-do-app-6fab0",
  storageBucket: "to-do-app-6fab0.appspot.com",
  messagingSenderId: "59364655304",
  appId: "1:59364655304:web:d65a5adf70ddf2365225fd"
};


const fb = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(fb);

export { db, firebaseConfig, auth };
