// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.1.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.1.2/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyDJ0g1KcuhW172Ju9bpg3yfGYU40f1vgT0",
    authDomain: "curey-9ac82.firebaseapp.com",
    databaseURL: "https://curey-9ac82-default-rtdb.firebaseio.com",
    projectId: "curey-9ac82",
    storageBucket: "curey-9ac82.appspot.com",
    messagingSenderId: "487851879496",
    appId: "1:487851879496:web:1cc31b68fa5c38d1133c7d",
    measurementId: "G-FHP2HN62YQ",
});

