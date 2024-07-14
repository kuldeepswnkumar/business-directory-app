// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyDHVAdRZwfIOGW8Dq6neiyuTV6WD58v4l8",

    authDomain: "business-directory-90444.firebaseapp.com",

    projectId: "business-directory-90444",

    storageBucket: "business-directory-90444.appspot.com",

    messagingSenderId: "566052678397",

    appId: "1:566052678397:web:c0facb044a6eef294fac94",

    measurementId: "G-3XZG2K851F"

};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// const analytics = getAnalytics(app);