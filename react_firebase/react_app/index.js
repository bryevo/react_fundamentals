import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import NavBar from './components/NavigationBar.jsx';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA3DkwLyhdJaum0UHWlQ4U-_jSnJ2Mn8EA",
  authDomain: "react-tutorial-9f6f6.firebaseapp.com",
  databaseURL: "https://react-tutorial-9f6f6.firebaseio.com",
  storageBucket: "react-tutorial-9f6f6.appspot.com",
  messagingSenderId: "366122357915"
};
firebase.initializeApp(config);

ReactDOM.render(
    <NavBar/>,
    document.getElementById('navbar')
);