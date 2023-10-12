// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBdYLJorfIGY9H8I_rOie77ezh85MQLDnU",
    authDomain: "advocate-notes.firebaseapp.com",
    projectId: "advocate-notes",
    storageBucket: "advocate-notes.appspot.com",
    messagingSenderId: "390560057222",
    appId: "1:390560057222:web:b7c44e2140ca03f56d0e07",
    measurementId: "G-ETK4B4VWFQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;
