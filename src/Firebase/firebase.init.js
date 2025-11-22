// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpmdzuM14_Nww0PnhN7Bg-rjDqFDUr14w",
  authDomain: "project-with-firebase-841b0.firebaseapp.com",
  projectId: "project-with-firebase-841b0",
  storageBucket: "project-with-firebase-841b0.firebasestorage.app",
  messagingSenderId: "449854398074",
  appId: "1:449854398074:web:4ea1d3d14f81d0c639e5c3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
