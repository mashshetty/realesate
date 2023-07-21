// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCQINQKWV7YS81LcnIFPDs7tpDkbmvShWc",
  authDomain: "realestate-b7448.firebaseapp.com",
  projectId: "realestate-b7448",
  storageBucket: "realestate-b7448.appspot.com",
  messagingSenderId: "154792280088",
  appId: "1:154792280088:web:f451425d3f56cddbb9436d",
  measurementId: "G-F5CYMJ91K5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);