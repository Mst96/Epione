import React from 'react';
import Tile from "../components/includes/Tile";
import HeartRate from "../components/includes/HeartRate";
import Fetch from 'react-fetch';
import { Link } from "react-router";
let users = require('../../../users.json');

let steps = require('../../../json/steps.json')["step-counter"]["dataset"][0]["steps"];
// let distance = require('../../../json/distance/distance-week.json')[2];
let sleep = require('../../../json/sleep/sleep-week.json')[2];
let floors = require('../../../json/floors/floors-week.json')[2];

export default class Activity extends React.Component{
    constructor(props) {
        super(props);
        console.log(steps)
        this.state = {user: {}, steps: steps, distance: 2000, sleep: sleep.y, floors: floors.y};
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
    
            <Tile linkTo={"/"+ this.state.user.firstName +"/activityPage"} image="https://png.icons8.com/?id=40321&size=2x" name='Steps' line1={"Steps:"} line2={this.state.steps}/>
            <Tile linkTo={"/"+ this.state.user.firstName +"/distance"} image="https://png.icons8.com/?id=46744&size=2x" name='Distance' line1={"Distance"} line2={this.state.distance}/>
            <Tile linkTo={"/"+ this.state.user.firstName +"/floors"} image="https://png.icons8.com/?id=17589&size=2x" name='Floors' line1={"Floors:"} line2={this.state.floors}/>
            <Tile linkTo={"/"+ this.state.user.firstName +"/sleep"} image="https://png.icons8.com/?id=17363&size=2x" name='Sleep' line1={"Sleep:"} line2={this.state.sleep}/>
        </div>
    </div>
        );
}
}
