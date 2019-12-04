import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCjA342aFCObXmHAEizyktMx_1K_NLPHpg",
    authDomain: "crwn-db-23.firebaseapp.com",
    databaseURL: "https://crwn-db-23.firebaseio.com",
    projectId: "crwn-db-23",
    storageBucket: "crwn-db-23.appspot.com",
    messagingSenderId: "946764861692",
    appId: "1:946764861692:web:a305827199d30369474779"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
