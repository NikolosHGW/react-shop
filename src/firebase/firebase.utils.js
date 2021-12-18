import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const config = {
  apiKey: "AIzaSyAnzk2W2p_n7cEaoIiNh5SNB_S4cntcsnU",
  authDomain: "crwn-db-df27a.firebaseapp.com",
  projectId: "crwn-db-df27a",
  storageBucket: "crwn-db-df27a.appspot.com",
  messagingSenderId: "765910095330",
  appId: "1:765910095330:web:1998dc40c62337fdb595bb"
};

export const app = initializeApp(config);

export const auth = getAuth();
export const db = getFirestore();

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  const { uid, displayName, email } = userAuth;
  if (!userAuth) {
    return;
  }

  const docRef = doc(db, 'users', uid);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    const createdAt = new Date();

    try {
      await setDoc(docRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  return docSnap;
};

export const getCreatedUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);
