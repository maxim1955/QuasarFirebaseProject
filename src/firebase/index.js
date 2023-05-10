import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC61N27Kr1__ybzU55W9bSt0n_e7tKe7zs",
  authDomain: "quasar-app-c5635.firebaseapp.com",
  projectId: "quasar-app-c5635",
  storageBucket: "quasar-app-c5635.appspot.com",
  messagingSenderId: "553918949081",
  appId: "1:553918949081:web:9d345b25700538ea8dc0c8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);
export {
  db,
  auth
};
