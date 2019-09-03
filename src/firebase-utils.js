import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDOP5GZxAIPeEZ4wkMdo57OBq0YQ0gMr34",
  authDomain: "crwn-db-fa5fc.firebaseapp.com",
  databaseURL: "https://crwn-db-fa5fc.firebaseio.com",
  projectId: "crwn-db-fa5fc",
  storageBucket: "",
  messagingSenderId: "110933479237",
  appId: "1:110933479237:web:bbc14a1807a51b04"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
