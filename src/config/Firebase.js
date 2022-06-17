// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoQMYLc8zC6OeVPDDqpOkpoIlf1xR9NIc",
  authDomain: "exclo-lab.firebaseapp.com",
  projectId: "exclo-lab",
  storageBucket: "exclo-lab.appspot.com",
  messagingSenderId: "657230079911",
  appId: "1:657230079911:web:520e74c006dae704167882",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
