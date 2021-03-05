import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCwRP63pGpxzI9opuHOcMFlkN9UNOAHAlY",
    authDomain: "quickmart-63cc8.firebaseapp.com",
    databaseURL: "https://quickmart-63cc8.firebaseio.com",
    projectId: "quickmart-63cc8",
    storageBucket: "quickmart-63cc8.appspot.com",
    messagingSenderId: "203016294250",
    appId: "1:203016294250:web:25f17a114f77abf6d15f13"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore()
  export default firebase;