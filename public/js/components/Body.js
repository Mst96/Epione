import React from 'react';
import Tile from "../components/includes/Tile";
import HeartRate from "../components/includes/HeartRate";
import Fetch from 'react-fetch';
import { Link } from "react-router";
let profile = require('../../profile-test.json');
let users = require('../../../users.json');

export default class Body extends React.Component{
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
            <Tile linkTo={"/" + this.state.user.firstName +"/weight"} image="https://png.icons8.com/?id=46599&size=2x" name='Weight' line1={"Weight:"} line2={this.state.user.weight}/>
            <Tile linkTo={"/" + this.state.user.firstName +"/bmi"} image="http://lh5.ggpht.com/0rLLruZKLq5CJpF6J4Rrvet5JpGW6mrGQqeullt5ul3bVRB73r4sDTNiynMx3vHrLQc=w100" name='BMI' line1={"BMI:"} line2={this.state.user.bmi}/>
            <Tile linkTo={"/" + this.state.user.firstName +"/bodyfat"} image="https://png.icons8.com/?id=46599&size=2x" name='Body Fat %' line1={"Body Fat %:"} line2={this.state.user.fat}/>
            <Tile linkTo={"/" + this.state.user.firstName +"/bodywater"} image="http://lh5.ggpht.com/0rLLruZKLq5CJpF6J4Rrvet5JpGW6mrGQqeullt5ul3bVRB73r4sDTNiynMx3vHrLQc=w100" name='Body Water %' line1={"Body Water %:"} line2={this.state.user.water}/>
              </div>
    </div>
        );
}
}
