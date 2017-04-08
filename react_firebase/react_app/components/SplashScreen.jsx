import React from 'react';
import splashStyles from '../style/splashStyles.css';
import * as firebase from 'firebase';
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';

import About from './About.jsx';


export default class SplashScreen extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            buttonPressed: '',
            loggedIn:'false'
        };
    

        this.handleEmail = this.handleEmail.bind(this);
        this.handlePass = this.handlePass.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
    }

    handleEmail(event) {
        this.setState({email: event.target.value});
    }
    handlePass(event) {
        this.setState({password: event.target.value});
    }
    handleLogin(event) {
        try{
                console.log("signing in!");
                const promise = firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
                this.setState({loggedIn:'true'});
                alert('Welcome' + this.state.email);
            } catch(e){
                console.log("HELP log in" + e.message);
            }
        }
          
    handleCreate(event){
            try{
                    console.log("creating account: " + this.state);
                    const promise = firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
                    alert('Created Account!');
                    event.preventDefault(); //Prevents further submit link
                } catch(e){
                    console.log("HELP creating" + e.message);
                }
        }
                
    componentDidUpdate(props, state){
        if(this.state.loggedIn == 'true'){
            console.log("HEY YEAH YOU");
            console.log();
            this.context.router.push('/About');
            Router.push('/About');

        }
    }

    render(){
        console.log(this.props);
        return(
            <Router>
            <div className = "div_splash">
                <h1>Welcome to San Diego!</h1>
                <form >
                    <input className = "input_email" 
                            type = "text" 
                            placeholder = "Email"
                            value={this.state.email} 
                            onChange={this.handleEmail}/>
                    <br>
                    </br>
                    <input className = "input_password" 
                            type = "password" 
                            placeholder = "Password"
                            value={this.state.password} 
                            onChange={this.handlePass}/>
                    <br>
                    </br>
                
                <button 
                    type = "button" value = "Create"
                    id = "btn-login" onClick = {() => this.handleLogin()}
                    className="btn btn-primary btn-lg btn-success"> Login </button>
                <button 
                    type="button" value="Create"
                    onClick = {() => this.handleCreate()}
                    className="btn btn-primary btn-lg btn-info"> Sign Up! </button>
                <h1>Logged In: {this.state.loggedIn}</h1>
                </form>
            </div>
            </Router>
        );
    }
}