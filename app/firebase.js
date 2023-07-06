// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDf7UB9MNPxcUNvt3WZzAij3Af2BF7awM8",
  authDomain: "china-page.firebaseapp.com",
  projectId: "china-page",
  storageBucket: "china-page.appspot.com",
  messagingSenderId: "808070800978",
  appId: "1:808070800978:web:60125d6de30d9115ba218b",
  measurementId: "G-FFD0HQDZNK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
