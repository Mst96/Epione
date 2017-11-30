import React from 'react';
import Tile from "../components/includes/Tile";
import HeartRate from "../components/includes/HeartRate";
import Fetch from 'react-fetch';
import { Link } from "react-router";
let profile = require('../../profile-test.json');
let users = require('../../../users.json');

export default class Dashboard extends React.Component{
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
    
            <Tile linkTo={"/heartrate"} image="https://static0.fitbit.com/images/profile/defaultProfile_100_male.png" name='Profile' line1={this.state.user.firstName} line2={this.state.user.age}/>

            <Tile linkTo={"/heartrate"} image="http://lh5.ggpht.com/0rLLruZKLq5CJpF6J4Rrvet5JpGW6mrGQqeullt5ul3bVRB73r4sDTNiynMx3vHrLQc=w100" name='Pressure' line1={"Blood Pressure:"} line2={this.state.user.age}/>
            <Tile linkTo={"/steps"} image="https://png.icons8.com/?id=815&size=2x" name='Steps' line1={"Steps:"} line2={this.state.user.age}/>
            <Tile linkTo={"/heartrate"} image="http://is3.mzstatic.com/image/thumb/Purple71/v4/82/be/25/82be2555-1152-7172-472b-ddb83420683f/source/100x100bb.jpg" name='Calories' line1={"Calories Burnt:"} line2={this.state.user.age}/>
            <Tile linkTo={"/heartrate"} image="https://png.icons8.com/?id=46599&size=2x" name='Heart Rate' line1={"Heart rate:"} line2={this.state.user.age}/>
            <Tile linkTo={"/heartrate"} image="https://png.icons8.com/?id=20884&size=2x" name='Goals' line1={"Goals Met:"} line2={this.state.user.age}/>
            <Tile linkTo={"/heartrate"} image="https://png.icons8.com/?id=10787&size=2x" name='Sleep' line1={"Total Sleep:"} line2={this.state.user.age}/>
            <Tile linkTo={"/heartrate"} image="https://www.southwestphotobooths.co.uk/sites/default/files/styles/extras_square/public/Distance-Travel-Icon_1.png?itok=d4rzJQaP" name='Distance' line1={"Distance Travelled:"} line2={this.state.user.age}/>
            <Tile linkTo={"/heartrate"} image="http://meadowbrookglitter.com/wp-content/uploads/Water-Safe-Icon.png" name='Water' line1={"Water Consumption:"} line2={this.state.user.age}/>
            <Tile linkTo={"/heartrate"} image="http://blog.cadimage.com/wp-content/uploads/2014/11/Tool_Stairs-2.png" name='Floors' line1={"Total Floors:"} line2={this.state.user.age}/>
            <Tile linkTo={"/heartrate"} image="https://png.icons8.com/?id=42856&size=2x" name='Last Sync' line1={"29/11/2017 - 7:48 pm"}/>
            <Tile linkTo={"/heartrate"} image="https://png.icons8.com/?id=47054&size=2x" name='Settings'/>
        </div>
    </div>
        );
}
}
