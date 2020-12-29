import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAAqhiL8U5BK_ty_3miLA6YhZwNETthh0k",
  authDomain: "fb-messenger-8a433.firebaseapp.com",
  projectId: "fb-messenger-8a433",
  storageBucket: "fb-messenger-8a433.appspot.com",
  messagingSenderId: "346936258054",
  appId: "1:346936258054:web:4a7a8bdae188659a271d87",
  measurementId: "G-8T4X85B5YE",
});

const db = firebaseApp.firestore();

export default db;
