import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDpQiXIVThebYvb8oet0cmdnP94pgEXOWw",
    authDomain: "js-project-4f1d6.firebaseapp.com",
    projectId: "js-project-4f1d6",
    storageBucket: "js-project-4f1d6.firebasestorage.app",
    messagingSenderId: "448192345524",
    appId: "1:448192345524:web:2d54e119a089f2f3702ee1",
    measurementId: "G-2R9VFES7DV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const author = getAuth(app)

