// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq3IFuzOoc2Ehq74Dd_hk-0HFmVR4My3c",
  authDomain: "react-teeth-wizard-d2c37.firebaseapp.com",
  projectId: "react-teeth-wizard-d2c37",
  storageBucket: "react-teeth-wizard-d2c37.firebasestorage.app",
  messagingSenderId: "628267622260",
  appId: "1:628267622260:web:d795b03c4660d19d645621"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;