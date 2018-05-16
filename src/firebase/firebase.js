import * as firebase from 'firebase';
import ReduxSagaFirebase from 'redux-saga-firebase';

const config = {
    apiKey: "AIzaSyDq2-regAEuw6MydmzT2OtpB9I8WAG3fLc",
    authDomain: "movie-52fb7.firebaseapp.com",
    databaseURL: "https://movie-52fb7.firebaseio.com",
    projectId: "movie-52fb7",
    storageBucket: "movie-52fb7.appspot.com",
    messagingSenderId: "697312253930"
};

const myFirebaseApp = firebase.initializeApp(config);

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const reduxSagaFirebase = new ReduxSagaFirebase(myFirebaseApp)