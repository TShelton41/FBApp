// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6EJ9XEpVW0ECBwQdaBGqBKe5vkuIjgA8",
  authDomain: "n423-data-todd.firebaseapp.com",
  databaseURL: "https://n423-data-todd.firebaseio.com",
  projectId: "n423-data-todd",
  storageBucket: "n423-data-todd.appspot.com",
  messagingSenderId: "125541102309",
  appId: "1:125541102309:web:1b03c685f82b07ea1f1a0c",
  measurementId: "G-BMCJDJMM21",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
