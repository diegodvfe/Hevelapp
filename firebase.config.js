import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyC-VIPGJgFr3SkPTzMYSBlYw3hZS7_Nimg",
  authDomain: "food-app-5f78a.firebaseapp.com",
  databaseURL: "https://food-app-5f78a-default-rtdb.firebaseio.com",
  projectId: "food-app-5f78a",
  storageBucket: "food-app-5f78a.appspot.com",
  messagingSenderId: "1051831416255",
  appId: "1:1051831416255:web:b61322b04e508eafdd1d0a",
  measurementId: "G-B2B0KV36KM"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore_db = getFirestore(app)
const storage = getStorage(app)

export{app, firestore_db, storage}