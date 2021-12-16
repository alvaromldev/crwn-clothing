import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';

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

export const createUser = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(firestore, `users/${userAuth.uid}`);
  const snapshot = await getDoc(userRef);

  if (!snapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
  
    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error('error creating user', error.message);
    }
  }

  return userRef;
};

export default firebase;
