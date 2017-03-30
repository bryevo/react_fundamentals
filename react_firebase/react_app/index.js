import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import NavBar from './components/NavigationBar.jsx';

// Initialize Firebase
  const config = {
    apiKey: "AIzaSyBkjcdm-1ODw47ondjyoialDwmEN0jWXcg",
    authDomain: "webapptest-47f98.firebaseapp.com",
    databaseURL: "https://webapptest-47f98.firebaseio.com",
    storageBucket: "webapptest-47f98.appspot.com",
    messagingSenderId: "867930302360"
  };
  firebase.initializeApp(config);

ReactDOM.render(
    <NavBar/>,
    document.getElementById('navbar')
);