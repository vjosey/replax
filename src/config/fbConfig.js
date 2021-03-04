import firebase from 'firebase/app' 
import 'firebase/firestore'
import 'firebase/auth'

 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCwyL5j-P4nc0fvYAl_nWHUCVtr_bbYz9k",
    authDomain: "replax-test-app.firebaseapp.com",
    databaseURL: "https://replax-test-app.firebaseio.com",
    projectId: "replax-test-app",
    storageBucket: "replax-test-app.appspot.com",
    messagingSenderId: "693642170201",
    appId: "1:693642170201:web:eb2f93fba4f86e3b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;