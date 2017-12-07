import React from 'react';
import Tile from "../components/includes/Tile";
import HeartRate from "../components/includes/HeartRate";
import Fetch from 'react-fetch';
import { Link } from "react-router";
let profile = require('../../profile-test.json');
let users = require('../../../users.json');

export default class Vitals extends React.Component{
    constructor(props) {
        super(props);
        this.state = {user: {}};
    }
    componentDidMount() {
        var param = this.props.params.user;
        var user = users.filter(function(user){
            if(user.firstName === param){
                console.log("YOOO MATCH");
                return user;
            }
        })
        this.setState({user: user[0]});
    }
render(){
    console.log(this.state.user);
return(
    <div class="container">
        <div class="row">
    
            <Tile linkTo={"/"+ this.state.user.firstName + "/heartrate"} image="http://trimmermag.com/wp-content/uploads/2017/08/FitnessSept17_hearticon.png" name='Heart Rate' line1={"Heart Rate:"} line2={this.state.user.age}/>
            <Tile linkTo={"/"+ this.state.user.firstName + "/bloodpressure"} image="https://png.icons8.com/ios/2x/pressure.png" name='Blood Pressure' line1={"Blood Pressure:"} line2={this.state.user.age}/>
            <Tile linkTo={"/"+ this.state.user.firstName + "/temperature"} image="http://www.ti.com/content/dam/ticom/images/icons/red/temperature-sensor-icon-24396.png" name='Temperature' line1={"Temperature"} line2={this.state.user.age}/>
            <Tile linkTo={"/"+ this.state.user.firstName + "/heartrate"} image="https://www.gwinnettmedicalcenter.org/_img/lung-navy.png" name='Respiratory Rate' line1={"Respiratory Rate:"} line2={this.state.user.age}/>
               </div>
    </div>
        );
}
}
