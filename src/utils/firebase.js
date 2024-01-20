// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "newblog-1e80b.firebaseapp.com",
  projectId: "newblog-1e80b",
  storageBucket: "newblog-1e80b.appspot.com",
  messagingSenderId: "465628882610",
  appId: "1:465628882610:web:6be8f5abc9307335fdcbab"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);