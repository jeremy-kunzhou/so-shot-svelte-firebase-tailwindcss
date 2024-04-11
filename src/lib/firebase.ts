import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoiqR9V9JZJNW4SGvbay9UzkSBoYTjCXw",
  authDomain: "confusion-firebase-fd439.firebaseapp.com",
  databaseURL: "https://confusion-firebase-fd439-default-rtdb.firebaseio.com",
  projectId: "confusion-firebase-fd439",
  storageBucket: "confusion-firebase-fd439.appspot.com",
  messagingSenderId: "269073836163",
  appId: "1:269073836163:web:1331980f1926d882c153b6",
  measurementId: "G-64QCMWKQW6"
};

export const app = initializeApp(firebaseConfig)
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();