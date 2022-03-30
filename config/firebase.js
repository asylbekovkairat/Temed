import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDHQ6VpDkaiVWs-jsb-knVVJcaDUFqYN58",
  authDomain: "temed-firestore.firebaseapp.com",
  projectId: "temed-firestore",
  storageBucket: "temed-firestore.appspot.com",
  messagingSenderId: "18976735190",
  appId: "1:18976735190:web:c09d19bd6042c90a2dee77"
};

try{
    firebase.initializeApp(firebaseConfig);
} catch(err){
    if(!/already exists/.test(err.message)){
        console.error('Firebase initialization error', error.stack)
    }
}

const app = initializeApp(firebaseConfig);
export const db = firebase.firestore();
