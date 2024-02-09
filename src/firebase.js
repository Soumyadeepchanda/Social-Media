//firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut as signOutUser } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA-KPjiYUgP2nKHyWfZyxeCXNJWzhqt9MU",
  authDomain: "social-media-a8450.firebaseapp.com",
  projectId: "social-media-a8450",
  storageBucket: "social-media-a8450.appspot.com",
  messagingSenderId: "575415588315",
  appId: "1:575415588315:web:c3ac42420410b25c8683fe"
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error('Error signing in with Google:', error);
    throw error; // Re-throw the error to propagate it to the caller
  }
};

export const signOut = () => {
  return signOutUser(auth);
};

export { firebaseConfig };

export { collection, addDoc, getDocs };  // Ensure these exports are included
const db = getFirestore(firebaseApp);

export { firebaseApp as firebase, db };
export const getAllPosts = async () => {
  const postsCollection = collection(firestore, 'posts');
  const snapshot = await getDocs(postsCollection);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data(), userEmail: doc.data().userId }));
};
