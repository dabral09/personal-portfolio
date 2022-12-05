
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXE6HaxmqgZ-Qm7wKZFa_kh6IeMjby6LY",
  authDomain: "shubham-portfolio-7bc28.firebaseapp.com",
  projectId: "shubham-portfolio-7bc28",
  storageBucket: "shubham-portfolio-7bc28.appspot.com",
  messagingSenderId: "264295663743",
  appId: "1:264295663743:web:a4850755b1f1723bcc574a",
  measurementId: "G-BQST3KY1NE"
};


export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();