import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD78wO_pu6Pgm3D-HqX5BtFnGM47qVVNvo",
  authDomain: "discord-clone-1e7b6.firebaseapp.com",
  projectId: "discord-clone-1e7b6",
  storageBucket: "discord-clone-1e7b6.appspot.com",
  messagingSenderId: "231394003181",
  appId: "1:231394003181:web:9ac0e9130bb8ce77a1a4e4",
  measurementId: "G-JFLQ75T5TM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
