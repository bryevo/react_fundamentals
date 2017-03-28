import React from 'react';
import * as firebase from 'firebase';

export default class SignUp extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: ''
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
    handleCreate(event) {
        console.log(this.state);
       try {
            const promise = firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
            alert('Thanks for signing up!');
       } catch(e) {
           console.log(e.message);
       }
    }
    render() {
        return(
            <form onSubmit={this.handleCreate}>Email:&nbsp;
                <input type="email" value={this.state.email} onChange={this.handleEmail}></input><br/>Password:&nbsp;
                <input type="password" value={this.state.password} onChange={this.handlePass}></input>
                <input type="submit" value="Create"/>
            </form>
        );
    }
}