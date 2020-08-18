import * as firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDSXlnhIuH45L0W7epIgjvQK2n7yGSjX2s",
    authDomain: "joggingtracker-6e99a.firebaseapp.com",
    databaseURL: "https://joggingtracker-6e99a.firebaseio.com",
    projectId: "joggingtracker-6e99a",
    storageBucket: "joggingtracker-6e99a.appspot.com",
    messagingSenderId: "680058835550",
    appId: "1:680058835550:web:6029c14e4d33c92a9d5acf",
    measurementId: "G-8BNE1TNMXB"
}
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };