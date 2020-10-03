import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCzfS2JVIqJFv0IttPzNH8-l0GttwDjfIE",
  authDomain: "whatsappclone-451dc.firebaseapp.com",
  databaseURL: "https://whatsappclone-451dc.firebaseio.com",
  projectId: "whatsappclone-451dc",
  storageBucket: "whatsappclone-451dc.appspot.com",
  messagingSenderId: "202261435887",
  appId: "1:202261435887:web:89a8379da78e154d4e121a",
  measurementId: "G-88BST3XVJP",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
