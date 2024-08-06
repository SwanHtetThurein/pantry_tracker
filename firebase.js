// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7iNbps7LuxEnWlawDpe8n0C_MiL7b3ys",
  authDomain: "inventory-management-945de.firebaseapp.com",
  projectId: "inventory-management-945de",
  storageBucket: "inventory-management-945de.appspot.com",
  messagingSenderId: "56621727226",
  appId: "1:56621727226:web:37dfa4eb8a8381db723843",
  measurementId: "G-7CEFRGESWD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}