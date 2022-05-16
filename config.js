import firebase from 'firebase';

const  firebaseConfig = {
    apiKey: "AIzaSyCCoKkXfBsQlls06RnB_zKcpg6EVHn-0tk",
  authDomain: "schoolattendenceapp-df62b.firebaseapp.com",
  projectId: "schoolattendenceapp-df62b",
  storageBucket: "schoolattendenceapp-df62b.appspot.com",
  messagingSenderId: "796414660874",
  appId: "1:796414660874:web:bf483feec338126d726af3",
  measurementId: "G-CB8BPN2MFX"
  };

   // Initialize Firebase
   if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database();