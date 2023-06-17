import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyCtsw-IKTplLJmd8l658pTb65ZEtq9fsSQ",
  authDomain: "siteproject-86cf9.firebaseapp.com",
  projectId: "siteproject-86cf9",
  storageBucket: "siteproject-86cf9.appspot.com",
  messagingSenderId: "172263215874",
  appId: "1:172263215874:web:8f1b48dfc5d9aa94d3a81b",
  measurementId: "G-2JXYN2REGG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
