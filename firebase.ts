import * as firebaseApp from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// You can get this from the Firebase Console -> Project Settings -> General -> Your apps
const firebaseConfig = {
  apiKey: "AIzaSyA44DPfsAK5RuUFsFBYTtvS7b1jwQ-JZJs",
  authDomain: "ai-900-test.firebaseapp.com",
  databaseURL: "https://ai-900-test-default-rtdb.firebaseio.com",
  projectId: "ai-900-test",
  storageBucket: "ai-900-test.firebasestorage.app",
  messagingSenderId: "990057835974",
  appId: "1:990057835974:web:8d7d89bd7fbf8b6d62d6c7",
  measurementId: "G-H8YV0MCXM7",
};

// Initialize Firebase
const app = firebaseApp.initializeApp(firebaseConfig);

// Initialize Services
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getDatabase(app);
