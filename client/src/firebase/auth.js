import { auth, githubAuthProvider, googleAuthProvider } from './firebase'

//sign up
export const doCreateUserWithEmailAndPassword = (email, pwd) =>
    auth.createUserWithEmailAndPassword(email, pwd)

//sign in   
export const doSignInWithEmailAndPassword = (email, pwd) =>
    auth.signInWithEmailAndPassword(email, pwd)

//sing out    
export const doSignOut = () =>
    auth.signOut()

//pwd reset
export const doPasswordReset = (email) =>
    auth.sendPasswordResetEmail(email)

//pwd change
export const doPasswordUpdate = (pwd) =>
    auth.currentUser.updatePassword(pwd)

export const signInWithGoogle = () =>
    auth.signInWithPopup(googleAuthProvider)

export const signInWithGithub = () =>
    auth.signInWithPopup(githubAuthProvider)
