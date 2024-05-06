// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQeBS-yvXbBL868FIuLADUijsruQSWpJM",
  authDomain: "foodbox-74b2d.firebaseapp.com",
  projectId: "foodbox-74b2d",
  storageBucket: "foodbox-74b2d.appspot.com",
  messagingSenderId: "1041078978908",
  appId: "1:1041078978908:web:d749122b145c11cc28d999",
  measurementId: "G-BVJMDJJBQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);