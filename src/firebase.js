import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAbDSe_2OZdoQVImVyjjs5BJJa79SrH0Mg",
    authDomain: "facebook-clone-fd.firebaseapp.com",
    databaseURL: "https://facebook-clone-fd.firebaseio.com",
    projectId: "facebook-clone-fd",
    storageBucket: "facebook-clone-fd.appspot.com",
    messagingSenderId: "641423995923",
    appId: "1:641423995923:web:a122194e63c6a0ae9efbe6",
    measurementId: "G-4G2MJYNSHZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
