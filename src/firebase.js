import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAA-QMrWkAXvy1KwQUc1mbWuD-zcsAaUG0",
  authDomain: "texttheworld-4ed62.firebaseapp.com",
  databaseURL: "https://texttheworld-4ed62.firebaseio.com",
  projectId: "texttheworld-4ed62",
  storageBucket: "texttheworld-4ed62.appspot.com",
  messagingSenderId: "768600671760",
  appId: "1:768600671760:web:777e438333b5cc526eec95",
  measurementId: "G-TPRNHXMYNW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;