import firebase from "firebase/app";
import "firebase/auth";


export const auth = firebase.initializeApp({
    
        apiKey: "AIzaSyDHxKLwqdyWkRCvzbwFB7PEpxNDLN9aAec",
        authDomain: "messenger-539f7.firebaseapp.com",
        projectId: "messenger-539f7",
        storageBucket: "messenger-539f7.appspot.com",
        messagingSenderId: "1006572090113",
        appId: "1:1006572090113:web:866750c6d807a99b4f6100"
   
}).auth();