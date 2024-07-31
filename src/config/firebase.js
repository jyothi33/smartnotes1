// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider} from "firebase/auth";
import { getFirestore} from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYFgIJoe-SwLHoxZkisFDeYB-eABQ_GDM",
  authDomain: "smartnotes-7887d.firebaseapp.com",
  projectId: "smartnotes-7887d",
  storageBucket: "smartnotes-7887d.appspot.com",
  messagingSenderId: "167387571877",
  appId: "1:167387571877:web:b88902c447747a6ab78f4c",
  measurementId: "G-B2186V09DK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const db = getFirestore(app);