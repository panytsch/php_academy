import firebase from "firebase";

const config = {
    apiKey: "AIzaSyBXiVROODWXQhzZ6xGf5ywE9UzDoildf6w",
    authDomain: "fir-practice-9fcbd.firebaseapp.com",
    databaseURL: "https://fir-practice-9fcbd.firebaseio.com",
    projectId: "fir-practice-9fcbd",
    storageBucket: "",
    messagingSenderId: "275586573684"
  };
  firebase.initializeApp(config);

export default firebase;
