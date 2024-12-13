import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD7hvKm52gRBboM06davBH-UTfA0HTbCXE",
  authDomain: "digi-spark-43c2d.firebaseapp.com",
  projectId: "digi-spark-43c2d",
  storageBucket: "digi-spark-43c2d.appspot.com",
  messagingSenderId: "487748530950",
  appId: "1:487748530950:web:5b931fcec995f5896ee487"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Authentication
export const auth = getAuth(app);