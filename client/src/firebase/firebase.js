import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyAbatmTQHD3v-0hZw0PA4WYb9eZ6hpVg-E",
    authDomain: "ng-base-70b50.firebaseapp.com",
    databaseURL: "https://ng-base-70b50.firebaseio.com",
    projectId: "ng-base-70b50",
    storageBucket: "ng-base-70b50.appspot.com",
    messagingSenderId: "148047492258"
}

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();
const db = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();

export {
    auth,
    db,
    googleAuthProvider,
    githubAuthProvider
}