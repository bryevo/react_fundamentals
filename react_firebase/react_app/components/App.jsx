import React from 'react';
import * as firebase from 'firebase';
import SplashScreen from './SplashScreen.jsx';
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';
import About from './About.jsx';

export default class App extends React.Component {
 /* Initial state of App */

  constructor() {
    super();
    this.state = {loggedIn: false};
  }

  componentDidUpdate(state){
    if(this.state.loggedIn == 'false'){
      window.location.assign("/");
    }
    if(this.state.loggedIn == 'true')
      window.location.assign("/About");
  }

  handleLogin(){
    this.setState({loggedIn: true});
  }
  handleLogOut(){
    this.setState({loggedIn: false})
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" 
            render = {()=> <SplashScreen loginFunction = {this.handleLogin}/>
            }/>
          <Route path="/About" component={About}/>
        </div>
      </Router>
    );
  }
}