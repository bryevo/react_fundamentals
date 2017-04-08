import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import navstyle from '../style/style.css';
import App from './App.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';
import * as firebase from 'firebase';
import SplashScreen from './SplashScreen.jsx';


// const Child = ({ match }) => (
//   <div>ID: {location.pathname}</div>
// )
// This is the same
class Child extends React.Component {
    
    render() {
        const style = {
            WebkitTextFillColor: 'white'
        }
        console.log(this.props);
        const webpath = this.props.location.pathname;
        if (webpath != "/")
            return (<div style={style}>ID: {webpath.slice(1,webpath.length)}</div>);
        else return (<div style={style}>ID: home</div>
        )
    }
}
export default class NavigationBar extends React.Component {
    render() {
        console.log
        return(
            <Router><div>
                <div className="navContainer">
                    <div className="navlink" ><NavLink to="/"><button className="ps-btn">Home</button></NavLink></div>
                    <div className="ps-dropdown">
                        <NavLink to="/parking"><button className="ps-btn">Parking Structures</button></NavLink>
                        <div className="dropdown-content">
                            <NavLink to="/ps1">PS1</NavLink>
                            <NavLink to="/ps2">PS2</NavLink>
                            <NavLink to="/ps3">PS3</NavLink>
                            <NavLink to="/ps4">PS4</NavLink>
                            <NavLink to="/ps5">PS5</NavLink>
                            <NavLink to="/ps6">PS6</NavLink>
                            <NavLink to="/ps7">PS7</NavLink>
                            <NavLink to="/ps8">PS8</NavLink>
                            <NavLink to="/ps9">PS9</NavLink>
                            <NavLink to="/ps10">PS10</NavLink>
                            <NavLink to="/ps11">PS11</NavLink>
                            <NavLink to="/ps12">PS12</NavLink>
                        </div></div>
                 <div className="navlink" ><NavLink to="/about"><button className="ps-btn">About</button></NavLink></div>
                 <div className="navlink" ><NavLink to="/contact"><button className="ps-btn">Contact Us</button></NavLink></div>
                 <div className="navlink" ><NavLink to="/research"><button className="ps-btn">Research</button></NavLink></div>
                 <div className="navlink user" ><NavLink to="/login"><input id="log-btn" type="button" value="Login" className="ps-btn"></input></NavLink></div>
                 <div className="navlink user" ><NavLink to="/signup"><button className="ps-btn">Sign Up</button></NavLink></div>
            </div><hr/> {/*Line break in HTML*/}
                <Route exact path="/" component={SplashScreen}/>
                <Route path="/about" component={About}/>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={SignUp}/>
            </div>
            </Router>);
    }
}