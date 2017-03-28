import React from 'react';
import * as firebase from 'firebase';

export default class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        };
        // This binding is necessary to make `this` work in the callback
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePass = this.handlePass.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleEmail(event) {
        this.setState({email: event.target.value});
    }
    handlePass(event) {
        this.setState({password: event.target.value});
    }
    handleSubmit(event) {
        console.log(this.state);
        const promise = firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
        promise.catch(e => console.log(e.message));
        event.preventDefault(); //Prevents further submit link
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>Email:&nbsp;
                <input type="email" value={this.state.email} onChange={this.handleEmail}></input><br/>Password:&nbsp;
                <input type="password" value={this.state.password} onChange={this.handlePass}></input>
                <input type="submit" value="Log in"/>
            </form>
        );
    }
}