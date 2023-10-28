// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE7H2BNBdNY1yN-WZSTrSeeWPaAJ_qOP8",
  authDomain: "devathon-5736c.firebaseapp.com",
  databaseURL: "https://devathon-5736c-default-rtdb.firebaseio.com",
  projectId: "devathon-5736c",
  storageBucket: "devathon-5736c.appspot.com",
  messagingSenderId: "142371183993",
  appId: "1:142371183993:web:b85a8114b48f39c9a9a3a8",
  measurementId: "G-LX1GYNWNKJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);