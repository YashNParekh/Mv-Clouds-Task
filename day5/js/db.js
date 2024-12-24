import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getDatabase, } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDseZSlr7icXThOZAApTA0XBFB8F4836-k",
    authDomain: "my-project-d8aed.firebaseapp.com",
    projectId: "my-project-d8aed",
    storageBucket: "my-project-d8aed.firebasestorage.app",
    messagingSenderId: "369292604400",
    appId: "1:369292604400:web:f5297654284957107da335",
    measurementId: "G-7AGET8Q5CB"
};

// Initialize Firebase
export let app = initializeApp(firebaseConfig);
export let db = getDatabase(app);
export let auth = getAuth(app);


auth.languageCode = 'EN';