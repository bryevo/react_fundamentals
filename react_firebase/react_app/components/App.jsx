import React from 'react';
import * as firebase from 'firebase';

export default class App extends React.Component {
 /* Initial state of App */
  constructor() {
    super();
    this.state = {
      // latitude: 10
    };
  }
  
  /** Asynchronously updates database after rendering the DOM */
  componentDidMount() {
    /* reference to our database*/
    const rootRef = firebase.database().ref().child('/coordinates');
    /* assigns the a reference to one of the children(branch) of the database*/
    rootRef.on('value', snap => {
      this.setState({
          latitude: snap.child('/latitude').val(),
          longitude: snap.child('/longitude').val()  
      });
    });
  }
  render() {
    return (
      <div>
        <h1>
          {/*the current state of latitude in the view*/}
          Latitude: {this.state.latitude} <br/>
          Longitude: {this.state.longitude}
        </h1>
      </div>
    );
  }
}