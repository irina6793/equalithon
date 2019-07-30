import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
// import firebase from "firebase";
import * as firebase from 'firebase';
import 'firebase/firestore';

const config = {
	apiKey: "AIzaSyC5niqwRqwj5Oib4RUSQ6d7-OFvLoESSHI",
	authDomain: "team5-c5e77.firebaseapp.com",
	databaseURL: "https://team5-c5e77.firebaseio.com",
	projectId: "team5-c5e77",
	storageBucket: "team5-c5e77.appspot.com",
	messagingSenderId: "852033340147",
  appId: "1:852033340147:web:85fabc77e9436eee"
};



const db = app.firestore(config);

export default Firebase;