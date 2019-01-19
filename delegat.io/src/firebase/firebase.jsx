import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const prodConfig = {
  apiKey: "AIzaSyDIY4dr9w-zKYHzJ2S8NGIDYK0JXKcTkFc",
  authDomain: "delegat-io.firebaseapp.com",
  databaseURL: "https://delegat-io.firebaseio.com",
  projectId: "delegat-io",
  storageBucket: "delegat-io.appspot.com",
  messagingSenderId: "897805849614"
};

const devConfig = {
  apiKey: "AIzaSyDIY4dr9w-zKYHzJ2S8NGIDYK0JXKcTkFc",
  authDomain: "delegat-io.firebaseapp.com",
  databaseURL: "https://delegat-io.firebaseio.com",
  projectId: "delegat-io",
  storageBucket: "delegat-io.appspot.com",
  messagingSenderId: "897805849614"
};

const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const database = firebase.database();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { provider, database, auth };
