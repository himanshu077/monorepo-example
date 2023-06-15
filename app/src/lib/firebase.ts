import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDG0lLUg7gG0S0HXLYZqcKg5e8skeYjOYE",
  authDomain: "fir-auth-173bc.firebaseapp.com",
  projectId: "fir-auth-173bc",
  storageBucket: "fir-auth-173bc.appspot.com",
  messagingSenderId: "938970366922",
  appId: "1:938970366922:web:a98faa87106f446552c533",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { app, auth, db, provider };

export default db;
