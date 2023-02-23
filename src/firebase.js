import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA7Y3V1tRRxo45XY4RwBU2yxh1DolG5I7Q",
    authDomain: "chat-app-f9c51.firebaseapp.com",
    projectId: "chat-app-f9c51",
    storageBucket: "chat-app-f9c51.appspot.com",
    messagingSenderId: "350958041287",
    appId: "1:350958041287:web:61f64fa5ae50630ee2a6e2",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
