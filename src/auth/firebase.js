// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: "AIzaSyAsBtKM45EL61x064fM_Txvt25FhnlQvwY",
  authDomain: "insta-vue-cf3a1.firebaseapp.com",
  projectId: "insta-vue-cf3a1",
  storageBucket: "insta-vue-cf3a1.appspot.com",
  messagingSenderId: "84510477988",
  appId: "1:84510477988:web:2a8c0e351df0cc0b7c6031",
  measurementId: "G-78Q2LX7BR9"
};

// Initialize Firebase
const instance = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default instance;
