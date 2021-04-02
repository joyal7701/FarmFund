import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCabI7bWU_SpuQpeg7zSTDYyHYae1dHI3k",
  authDomain: "farmfund-94ab5.firebaseapp.com",
  projectId: "farmfund-94ab5",
  storageBucket: "farmfund-94ab5.appspot.com",
  messagingSenderId: "739041633972",
  appId: "1:739041633972:web:c53e9871b55e1e62cd99e1",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
