// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPn6CDxrwlc2O-lz8Rfpuhm4630ZnyFWs",
  authDomain: "ecommerce-coderhouse-1a98f.firebaseapp.com",
  projectId: "ecommerce-coderhouse-1a98f",
  storageBucket: "ecommerce-coderhouse-1a98f.appspot.com",
  messagingSenderId: "303261596787",
  appId: "1:303261596787:web:42b8b8cabfe16f86fe3e06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db
