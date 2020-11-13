import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
var firebaseConfig= {
    apiKey: "AIzaSyCQPgT3iIwcyR4awNh8ZbCDMqLyg7ACuPM",
    authDomain: "olx-web-bda1a.firebaseapp.com",
    databaseURL: "https://olx-web-bda1a.firebaseio.com",
    projectId: "olx-web-bda1a",
    storageBucket: "olx-web-bda1a.appspot.com",
    messagingSenderId: "653933133851",
    appId: "1:653933133851:web:79a22ab95c4b0a84de38be",
    measurementId: "G-PRN36Q846J"
  };
 
  var Firebase= firebase.initializeApp(firebaseConfig);
  export default Firebase