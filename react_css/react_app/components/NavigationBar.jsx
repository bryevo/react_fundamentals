import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import navstyle from '../style/style.css';
import Home from './Home.jsx';
import About from './About.jsx';

// const Child = ({ match }) => (
//   <div>ID: {location.pathname}</div>
// )
// This is the same
class Child extends React.Component {
    render() {
        console.log(this.props);
        const webpath = this.props.location.pathname;
        if (webpath != "/")
            return (<div>ID: {webpath.slice(1,webpath.length)}</div>);
        else return (<div>ID: home</div>
        )
    }
}
export default class NavigationBar extends React.Component {
    render() {
        return(
            <Router>
            <div>
                <ul className="nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                </ul>
                <hr/> {/*Line break in HTML*/}
                <Route path="/" component={Child}/>
            </div>
            </Router>);
    }
}