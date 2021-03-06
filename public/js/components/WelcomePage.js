import React from 'react';
import Tile from "../components/includes/Tile";
import Tile2 from "../components/includes/Tile2";
import Tile4 from "../components/includes/Tile4";
import Fetch from 'react-fetch';
import { Link } from "react-router";

let profile = require('../../profile-test.json');
let users = require('../../../json/users.json');

export default class WelcomePage extends React.Component{
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
       
           <h1>Welcome to Epione, {this.state.user.firstName}. </h1>
    

        </div>

        <Tile4 linkTo={"/"+ this.state.user.firstName+"/dashboard"} image="" name='Go To Dashboard'/>  
    </div>
        );
}
}
