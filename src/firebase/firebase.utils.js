import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyDD6nEm9pow-ENGyyg3Zd_GOD_pXWcV2FU',
  authDomain: 'aml-crwn-db.firebaseapp.com',
  projectId: 'aml-crwn-db',
  storageBucket: 'aml-crwn-db.appspot.com',
  messagingSenderId: '243050037628',
  appId: '1:243050037628:web:d1fc9934f545e7c40524f9',
  measurementId: 'G-LE5RQKTYH1',
};

const firebase = initializeApp(config);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default firebase;
