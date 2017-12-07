import React from 'react';
import Tile from "../components/includes/Tile";
import HeartRate from "../components/includes/HeartRate";
import Fetch from 'react-fetch';
import { Link } from "react-router";
let profile = require('../../profile-test.json');
let users = require('../../../users.json');

export default class Activity extends React.Component{
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
               
           <Tile linkTo={"/"+ this.state.user.firstName +"/activityPage"} image="https://png.icons8.com/?id=46599&size=2x" name='Steps' line1={"Heart Rate:"} line2={this.state.user.age}/>
            <Tile linkTo={"/"+ this.state.user.firstName +"/distance"} image="http://lh5.ggpht.com/0rLLruZKLq5CJpF6J4Rrvet5JpGW6mrGQqeullt5ul3bVRB73r4sDTNiynMx3vHrLQc=w100" name='Distance' line1={"Blood Pressure:"} line2={this.state.user.age}/>
            <Tile linkTo={"/"+ this.state.user.firstName +"/floors"} image="https://png.icons8.com/?id=46599&size=2x" name='Floors' line1={"Temperature"} line2={this.state.user.age}/>
            <Tile linkTo={"/"+ this.state.user.firstName +"/sleep"} image="http://lh5.ggpht.com/0rLLruZKLq5CJpF6J4Rrvet5JpGW6mrGQqeullt5ul3bVRB73r4sDTNiynMx3vHrLQc=w100" name='Sleep' line1={"Respiratory Rate:"} line2={this.state.user.age}/>
               </div>
    </div>
        );
}
}
