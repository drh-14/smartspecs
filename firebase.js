require("dotenv").config();

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: "smartspecs-5dd21.firebaseapp.com",
  projectId: "smartspecs-5dd21",
  storageBucket: "smartspecs-5dd21.appspot.com",
  messagingSenderId: "759744413602",
  appId: "1:759744413602:web:71eb8d40a3ca9147db3cfb",
  measurementId: "G-77TPVBLYYV"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { app, db, analytics };
