import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBrGrEyddOQ-uouB5ZT5QaaJu92Q77JB6I",
    authDomain: "chat-2f320.firebaseapp.com",
    projectId: "chat-2f320",
    storageBucket: "chat-2f320.appspot.com",
    messagingSenderId: "422708051105",
    appId: "1:422708051105:web:aa38c4a0a23f23031b04e0",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);
