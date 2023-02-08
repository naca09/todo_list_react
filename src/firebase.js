// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAYLhOlBm616Dv36OJ05sNPZZWi-tqnjbA",
    authDomain: "to-do-list-fc8bf.firebaseapp.com",
    projectId: "to-do-list-fc8bf",
    storageBucket: "to-do-list-fc8bf.appspot.com",
    messagingSenderId: "690541099082",
    appId: "1:690541099082:web:4903fd7356e2f0e989ceb3",
    measurementId: "G-S2Q5R3ZLHX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)