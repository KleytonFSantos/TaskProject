import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBNQzE6pKicrXF17VtWWNbWYLB1-iBMF4Q",
    authDomain: "task-ba7fc.firebaseapp.com",
    projectId: "task-ba7fc",
    storageBucket: "task-ba7fc.appspot.com",
    messagingSenderId: "297248529978",
    appId: "1:297248529978:web:2b77ea18972becbc4fdf03"
  };


let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const database = app.firestore();

export { database };