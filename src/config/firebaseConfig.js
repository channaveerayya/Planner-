import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCDpiFrVxKEZA6LoqmaIu_tzVeIyb6xlko",
    authDomain: "planner-18412.firebaseapp.com",
    databaseURL: "https://planner-18412.firebaseio.com",
    projectId: "planner-18412",
    storageBucket: "planner-18412.appspot.com",
    messagingSenderId: "682386766834",
    appId: "1:682386766834:web:3f7960e73315609f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.firestore().settings({timestampsInSnapshots:true})

  export default firebase;