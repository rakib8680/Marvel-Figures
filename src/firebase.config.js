// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKjuS3mG_uzDL8z4dXZ_lBVnEmUdUHXTs",
  authDomain: "marvel-figures.firebaseapp.com",
  projectId: "marvel-figures",
  storageBucket: "marvel-figures.appspot.com",
  messagingSenderId: "57084893356",
  appId: "1:57084893356:web:eab339b5ea296151f6e709"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;