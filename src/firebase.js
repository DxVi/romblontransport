

import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnvSwLclXE6uGltIZ3ECpJE5KNQSu1ziM",
  authDomain: "romblontrans.firebaseapp.com",
  databaseURL: "https://romblontrans.firebaseio.com",
  projectId: "romblontrans",
  storageBucket: "romblontrans.appspot.com",
  messagingSenderId: "675613511908",
  appId: "1:675613511908:web:42c39967a85b750515dcf1",
  measurementId: "G-E7KPVETCCQ"
};
 
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
