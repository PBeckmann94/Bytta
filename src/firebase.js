import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
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

export { db }
