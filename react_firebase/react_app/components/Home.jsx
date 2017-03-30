import React from 'react';
import App from './App.jsx';
import * as firebase from 'firebase';



export default class Home extends React.Component {

    constructor() {
        super();
        this.state = {

        };
    }
componentDidMount() {
    /* reference to our database*/
    const rootRef = firebase.database().ref();
    /* assigns the a reference to one of the children(branch) of the database*/
    rootRef.on('value', snap => {
      this.setState({
          percentage: snap.child('Parking Lot 12').val(),
      });
    });
  }

    render() {
        console.log(this.state);
        return (
        <div className="ParkingContainer">
            <div className="rowa">
                <div className="col-md-4">
                    <img className="perfect" src={require('../content/way_viejas.jpg')}/>
                </div>

                <div className="col-md-6">
                {this.state.percentage} 
                </div>
            </div>

            <div className="rowb">
                <div className="col-md-4">
                    Parking Lot 12
                </div>

                <div className="col-md-6">
                nice logo and link to directions
                </div>
            </div>
        </div>
        
        );
    }
}