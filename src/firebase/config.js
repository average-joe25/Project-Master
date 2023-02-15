import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'
const firebaseConfig = {
    apiKey:process.env.REACT_APP_apiKey,
    authDomain:process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// initialize firestore
const db = firebase.firestore();
// initialize auth
const projectAuth = firebase.auth();
//timestamp
const timestamp = firebase.firestore.Timestamp;
// initialize storage
const projectStorage = firebase.storage();
export { db, projectAuth, projectStorage, timestamp };



