// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDK-DH5iOCkst_G_wRmyO-t2EKWXrtquok",
    authDomain: "maltimart-39a45.firebaseapp.com",
    projectId: "maltimart-39a45",
    storageBucket: "maltimart-39a45.appspot.com",
    messagingSenderId: "925532684670",
    appId: "1:925532684670:web:c27a60bfa6102a0828b32f",
    measurementId: "G-BFEYBVPX5P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
