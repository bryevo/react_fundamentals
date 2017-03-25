// import React, { Component } from 'react';
var React = require('react');
var ReactDOM = require('react-dom');

/* With ES6
class HelloWorld extends Component {
    render() {
        return (
            <div className="HelloWorld"> Hello, this is React!</div>
        );
    }
}*/
var HelloWorld = React.createClass({
    render: function() {
        console.log(this.props)
        return (
            <div> Hello {this.props.first_name} {this.props.last_name} </div>
        )
    }
})

ReactDOM.render(
    <HelloWorld first_name="Brian" last_name="Vo"/>,
    document.getElementById('app')
)