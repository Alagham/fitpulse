// Import the functions you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Replace with your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyCu3OrKeT1IWc-Yu0lQTXt2rGwI7cWR_SE",
  authDomain: "fitpulse-94565.firebaseapp.com",
  projectId: "fitpulse-94565",
  storageBucket: "fitpulse-94565.firebasestorage.app",
  messagingSenderId: "213710149995",
  appId: "1:213710149995:web:686f4ff038921bb4d8d42e",
  measurementId: "G-6HQ7J5C8CP"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
