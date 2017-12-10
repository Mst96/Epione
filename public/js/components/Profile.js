import React from 'react';
import Tile from "../components/includes/Tile";
import Tile2 from "../components/includes/Tile2";
import HeartRate from "../components/includes/HeartRate";
import Allergies from "../components/includes/Allergies";
import Symptoms from "../components/includes/Symptoms";
import Fetch from 'react-fetch';
import { Link } from "react-router";
let users = require('../../../json/users.json');

export default class Profile extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }
render(){
return(
    <div class="container">
        <div class="row">
        
            <Tile image="https://static0.fitbit.com/images/profile/defaultProfile_100_male.png" name='Name' line1={this.state.user.firstName}/>
            <Tile image="http://mgla.asn.au/wp-content/uploads/2017/06/icon-age.png" name='age' line1={"Age:"} line2={this.state.user.age}/>
            <Tile image="https://png.icons8.com/?id=19420&size=2x" name='Height' line1={"Current Height:"} line2={this.state.user.height}/>
            <Tile image="https://png.icons8.com/?id=37167&size=2x" name='Weight' line1={"Current Weight:"} line2={this.state.user.weight}/>
        
            <Allergies/>
            <Symptoms/>
            <Tile2 linkTo={"/" + this.state.user.firstName + "/dashboard"} image="https://png.icons8.com/ios/2x/settings.png" name='Back to Dashboard'/>
        </div>
    </div>
        );
}

componentDidMount() {
    var param = this.props.params.user;
      var user = users.filter(function(user){
          if(user.firstName === param){
              return user;
          }
      })
    this.setState({user: user[0]});

}

}