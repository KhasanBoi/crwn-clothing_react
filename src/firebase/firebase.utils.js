import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDpXLQdNuVpozDLF62qARnHQS5gQtWOZ0Y",
    authDomain: "crown-shop-65cfc.firebaseapp.com",
    projectId: "crown-shop-65cfc",
    storageBucket: "crown-shop-65cfc.appspot.com",
    messagingSenderId: "692697997926",
    appId: "1:692697997926:web:5b254c0ada75e5fab903a7",
    measurementId: "G-DJXJDFC5P1"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( {prompt: 'select_account'} );
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;