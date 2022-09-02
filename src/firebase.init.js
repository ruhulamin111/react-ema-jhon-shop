// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAW7mHmovJE0G1f600bqSJMuhWGOZSnTpg",
    authDomain: "react-ema-john-shop.firebaseapp.com",
    projectId: "react-ema-john-shop",
    storageBucket: "react-ema-john-shop.appspot.com",
    messagingSenderId: "407496342169",
    appId: "1:407496342169:web:7b6ef81bfa3b700a10d608"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;