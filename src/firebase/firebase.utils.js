import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

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
// export const firestore = Firebase.firestore();

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => signInWithPopup(auth, provider);
