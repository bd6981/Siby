// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_API_KEY,
  authDomain: "my-map-373723.firebaseapp.com",
  projectId: "my-map-373723",
  storageBucket: "my-map-373723.appspot.com",
  messagingSenderId: "936996344950",
  appId: "1:936996344950:web:f48359287f65558eeafb57",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
