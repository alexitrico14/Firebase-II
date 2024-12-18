// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Importa getAuth para usar la autenticación
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBbhDWcqV0cHyeV7lfv9LBosU6uPbPFHs",
  authDomain: "fir-auth-1a86b.firebaseapp.com",
  projectId: "fir-auth-1a86b",
  storageBucket: "fir-auth-1a86b.firebasestorage.app",
  messagingSenderId: "571978278425",
  appId: "1:571978278425:web:e409bab6a1c5b9e266ec88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exportar la autenticación
export const auth = getAuth(app);