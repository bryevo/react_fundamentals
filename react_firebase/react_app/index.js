import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import App from './components/App.jsx';

// Initialize Firebase
  const config = {
    apiKey: "AIzaSyC_na5VWr1z6yYvttDGTZrv3QOaa4Rxd3g",
    authDomain: "ngc-app-2017.firebaseapp.com",
    databaseURL: "https://ngc-app-2017.firebaseio.com",
    projectId: "ngc-app-2017",
    storageBucket: "ngc-app-2017.appspot.com",
    messagingSenderId: "817986584522"
  };
  firebase.initializeApp(config);

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);