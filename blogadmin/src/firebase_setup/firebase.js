// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Import Firebase Storage
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvcS_oTWyJk5VSI3CDqSY8zTChH8_Z0PE",
  authDomain: "electric-5c719.firebaseapp.com",
  projectId: "electric-5c719",
  storageBucket: "electric-5c719.firebasestorage.app",
  messagingSenderId: "771672358886",
  appId: "1:771672358886:web:8d0400c58a52ced969a027",
  measurementId: "G-36QBPX30NG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app); // Initialize Firebase Storage
