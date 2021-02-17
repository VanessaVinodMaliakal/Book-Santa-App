import firebase from 'firebase'
require('@firebase/firestore')

  var firebaseConfig = {
    apiKey: "AIzaSyCCB35Ihpu1BX2JwzDkwHSx7au_SLUfpoM",
    authDomain: "book-santa-app-1e1bc.firebaseapp.com",
    projectId: "book-santa-app-1e1bc",
    storageBucket: "book-santa-app-1e1bc.appspot.com",
    messagingSenderId: "899838231243",
    appId: "1:899838231243:web:e910fc2fb453970ab1514e"
  };
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  export default firebase.firestore()
