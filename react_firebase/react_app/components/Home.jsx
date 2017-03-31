import React from 'react';
import App from './App.jsx';
import * as firebase from 'firebase';

export default class Home extends React.Component {
    
    //Initialize state
    constructor() {
        super();
        this.state = {};
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
        return (
            <div className="parking-row">
                <div className="col-xs-6 col-sm-6 col-md-5 col-lg-4"> 
                Parking Lot 12
                <img className="park" src={require('../content/way_viejas.jpg')}/>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-7 col-lg-8">
                    <div className="lot-percent">{this.state.percentage}% full</div>
                    <div className="park-logos">
                        <img className="logos" src={require('../content/Students.png')}/>
                        <img className="logos" src={require('../content/Faculty.png')}/>
                        <img className="logos" src={require('../content/Disability.png')}/>
                        <img className="logos" src={require('../content/PLogo.png')}/>
                        <img className="logos" src={require('../content/NLogo.png')}/>
                        <img className="logos" src={require('../content/MLogo.png')}/>
                    </div>
                </div>
            </div>
        );
    }
}