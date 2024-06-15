import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_API_KEY,
  apiKey: 'AIzaSyDQ3-fYoDnvr1He1cj8cAkYzwhy3eWu1XI',
  authDomain: 'reactchat-575c2.firebaseapp.com',
  projectId: 'reactchat-575c2',
  storageBucket: 'reactchat-575c2.appspot.com',
  messagingSenderId: '557797347728',
  appId: '1:557797347728:web:107311dad3a91e2e4a2315',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth()
export const db = getFirestore()
export const Storage = getStorage()
