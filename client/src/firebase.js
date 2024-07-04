// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a5d79.firebaseapp.com",
  projectId: "mern-estate-a5d79",
  storageBucket: "mern-estate-a5d79.appspot.com",
  messagingSenderId: "514171123274",
  appId: "1:514171123274:web:e94c41d7aa57bcc74cd8b3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);