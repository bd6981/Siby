import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCC5ffQsPsMzxkLEcG2a0kWLW8YSQLvsMY",
  authDomain: "siby-crimemap.firebaseapp.com",
  projectId: "siby-crimemap",
  storageBucket: "siby-crimemap.appspot.com",
  messagingSenderId: "540033710475",
  appId: "1:540033710475:web:5c16d9ff0a63727459d78e",
  measurementId: "G-H5L2NQ090N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);