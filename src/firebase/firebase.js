// import * as firebase from "firebase";
// import "firebase/storage";

import firebase from 'firebase'
import 'firebase/storage'

// Firebase config
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Testing the firebase connection
const database = firebase.database();

// Firebase image storage
const storage = firebase.storage();

// Google Authentication
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// Email auth?
const emailPasswordAuthProvider = firebase.auth()

// Exporting firebase for use within our application
export { firebase, emailPasswordAuthProvider, googleAuthProvider, storage, database as default };