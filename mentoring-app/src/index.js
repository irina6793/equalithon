import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './components/App';
import Firebase, { FirebaseContext } from './components/Firebase';



Firebase.db.collection("users")
.get()
.then(querySnapshot => {
  const data = querySnapshot.docs.map(doc => doc.data());
  console.log(data); // array of cities objects
});


ReactDOM.render(
	<FirebaseContext.Provider value={new Firebase()}>
	<App />
	</FirebaseContext.Provider>,
	document.getElementById('root')
	);

serviceWorker.unregister();


