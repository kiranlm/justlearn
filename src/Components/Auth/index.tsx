import firebase from 'firebase';
import firebaseConfig from '../../Config/firebase.config';

firebase.initializeApp(firebaseConfig);

// Password login
export const auth = firebase.auth();

// Google login
const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};
