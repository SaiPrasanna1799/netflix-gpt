// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVGLf1jNSDL4mWAr2FjjL2XZ2-pO8AAA0",
  authDomain: "netflixgpt-454b0.firebaseapp.com",
  projectId: "netflixgpt-454b0",
  storageBucket: "netflixgpt-454b0.firebasestorage.app",
  messagingSenderId: "891310369400",
  appId: "1:891310369400:web:fbb0ed86e3a47f91245b8d",
  measurementId: "G-GRSJ1WBR53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();