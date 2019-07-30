import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
	apiKey: "AIzaSyC5niqwRqwj5Oib4RUSQ6d7-OFvLoESSHI",
	authDomain: "team5-c5e77.firebaseapp.com",
	databaseURL: "https://team5-c5e77.firebaseio.com",
	projectId: "team5-c5e77",
	storageBucket: "team5-c5e77.appspot.com",
	messagingSenderId: "852033340147",
};

class Firebase {
	constructor() {
		app.initializeApp(config);

		this.auth=app.auth();
		this.db = app.database();
	}
  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
  this.auth.doCreateUserWithEmailAndPassword(email,password);

  doSignInWithEmailAndPassword = (email, password) =>
  this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
  this.auth.currentUser.updatePassword(password);

    // *** Merge Auth and DB User API *** //

  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.user(authUser.uid)
          .once('value')
          .then(snapshot => {
            const dbUser = snapshot.val();

            // default empty roles
            if (!dbUser.roles) {
              dbUser.roles = {};
            }

            // merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              emailVerified: authUser.emailVerified,
              providerData: authUser.providerData,
              ...dbUser,
            };

            next(authUser);
          });
      } else {
        fallback();
      }
    });

  // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');

  // *** Message API ***

  message = uid => this.db.ref(`messages/${uid}`);

  messages = () => this.db.ref('messages');

}

export default Firebase;