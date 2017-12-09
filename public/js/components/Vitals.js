import React from 'react';
import Tile from "../components/includes/Tile";
import HeartRate from "../components/includes/HeartRate";
import Fetch from 'react-fetch';
import { Link } from "react-router";
let profile = require('../../profile-test.json');
let users = require('../../../json/users.json');
let heartrate = require('../../../json/heartrate/heartrate-realtime.json');
let bloodpressure = require('../../../json/bloodpressure/bloodpressure-realtime.json');
let temperature = require('../../../json/temperature/temperature-realtime.json');
let respiratory = require('../../../json/respiratory/respiratory-realtime.json');


export default class Vitals extends React.Component{
    constructor(props) {
        super(props);
        this.state = {user: {}, heartrate: 65.2, bloodpressure: 103.8, temperature: 36.4, respiratory: 15.2 };
    }
    componentDidMount() {
        var param = this.props.params.user;
        var user = users.filter(function(user){
            if(user.firstName === param){
                return user;
            }
        })
        this.setState({user: user[0]});
        var i = 0;
        setInterval(() => {
          // if(data[i].y > 120) this.notify();
          this.setState({heartrate: heartrate[i].y, bloodpressure: bloodpressure[i].y, temperature: temperature[i].y, respiratory: respiratory[i].y });
          i++;
      }, 3000);
    }
render(){
    console.log(this.state.user);
return(
    <div class="container">
        <div class="row">
            <Tile linkTo={"/"+ this.state.user.firstName +"/heartrate"} image="http://trimmermag.com/wp-content/uploads/2017/08/FitnessSept17_hearticon.png" name='Heart Rate' line1={"Heart Rate:"} line2={this.state.heartrate}/>
            <Tile linkTo={"/"+ this.state.user.firstName +"/bloodpressure"} image="https://png.icons8.com/ios/2x/pressure.png" name='Blood Pressure' line1={"Blood Pressure:"} line2={this.state.bloodpressure}/>
            <Tile linkTo={"/"+ this.state.user.firstName +"/heartrate"} image="http://www.ti.com/content/dam/ticom/images/icons/red/temperature-sensor-icon-24396.png" name='Temperature' line1={"Temperature"} line2={this.state.temperature}/>
            <Tile linkTo={"/"+ this.state.user.firstName +"/heartrate"} image="https://www.gwinnettmedicalcenter.org/_img/lung-navy.png" name='Respiratory Rate' line1={"Respiratory Rate:"} line2={this.state.respiratory}/>
               </div>
    </div>
        );
}
}
