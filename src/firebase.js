// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAh6DHg-bNGe15xoHMneZNdEb6cYtlLcNo",
  authDomain: "hpb-comments.firebaseapp.com",
  projectId: "hpb-comments",
  storageBucket: "hpb-comments.firebasestorage.app",
  messagingSenderId: "924923080581",
  appId: "1:924923080581:web:c75ba4eb85b9fdc7261eec",
  measurementId: "G-7RKE465R90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);