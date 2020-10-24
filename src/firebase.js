

import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAPn96zP-XPWqTgJtODS15FGi9JN6UjQJU",
    authDomain: "romblontransport.firebaseapp.com",
    databaseURL: "https://romblontransport.firebaseio.com",
    projectId: "romblontransport",
    storageBucket: "romblontransport.appspot.com",
    messagingSenderId: "668393502780",
    appId: "1:668393502780:web:eb76ad43b5b542ed482b39",
    measurementId: "G-E4S95BJQB4"
  };
 
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
