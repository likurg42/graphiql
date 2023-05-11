import { FirebaseError, initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth';
import { getFirestore, query, getDocs, collection, where, addDoc } from 'firebase/firestore';
import { Modal } from './components/Modal.ts';

const firebaseConfig = {
  apiKey: 'AIzaSyBwVQ-BpCVrJQoGJ_ndWrddS07tmLceA9Q',
  authDomain: 'graphql-c84b4.firebaseapp.com',
  projectId: 'graphql-c84b4',
  storageBucket: 'graphql-c84b4.appspot.com',
  messagingSenderId: '237591451574',
  appId: '1:237591451574:web:4e1caeffc3933ce138d317',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const { user } = res;
    const q = query(collection(db, 'users'), where('uid', '==', user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google',
        email: user.email,
      });
    }
  } catch (err) {
    if (err instanceof FirebaseError) {
      Modal({
        title: err.name,
        text: err.message,
        icon: 'error',
      });
    }
  }
};
export const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    if (err instanceof FirebaseError) {
      Modal({
        title: err.name,
        text: err.message,
        icon: 'error',
      });
    }
  }
};
export const registerWithEmailAndPassword = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const { user } = res;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });
  } catch (err) {
    if (err instanceof FirebaseError) {
      Modal({
        title: err.name,
        text: err.message,
        icon: 'error',
      });
    }
  }
};
export const sendPasswordReset = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    Modal({
      title: 'Success',
      text: 'Password reset link sent!',
      icon: 'success',
    });
  } catch (err) {
    if (err instanceof FirebaseError) {
      Modal({
        title: err.name,
        text: err.message,
        icon: 'error',
      });
    }
  }
};
export const logout = () => {
  signOut(auth);
};
