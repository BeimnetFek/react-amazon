// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDBOD34-Qm-5Kq6Yke9qYXfWO3xK5u9320",
  authDomain: "fir-d656e.firebaseapp.com",
  projectId: "fir-d656e",
  storageBucket: "fir-d656e.appspot.com",
  messagingSenderId: "984164444488",
  appId: "1:984164444488:web:d6d6b1962c0ea19a4a2b7d",
  measurementId: "G-9XV22DFXYB",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
