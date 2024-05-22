
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";



const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "express-eec38.firebaseapp.com",
  projectId: "express-eec38",
  storageBucket: "express-eec38.appspot.com",
  messagingSenderId: "860599934674",
  appId: "1:860599934674:web:6d10ad5a4a52c6c54dd70b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export { auth, provider }
