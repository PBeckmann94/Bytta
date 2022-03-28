import { initializeApp } from 'firebase/app'
import { getFirestore,   
    query,
    getDocs,
    collection,
    where,
    addDoc, 
  } from 'firebase/firestore'
import { GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
  } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDoLHttVsJdE9zS0fbiBQrxgbQFRXd-0J0',

  authDomain: 'bytta-5d7e0.firebaseapp.com',

  projectId: 'bytta-5d7e0',

  storageBucket: 'bytta-5d7e0.appspot.com',

  messagingSenderId: '1079323355630',

  appId: '1:1079323355630:web:b3ec260158676f0c45c6ff',

  measurementId: 'G-XX5JJ0F2KS'
}
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  signOut(auth);
};
export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};


