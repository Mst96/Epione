import React from 'react';
import Tile from "../components/includes/Tile";
import Tile4 from "../components/includes/Tile4";
import Tile3 from "../components/includes/Tile3";
import Fetch from 'react-fetch';
export default class Login extends React.Component{

render(){
return(
       <div class="container">
        <h1>Hi, please login to your profile</h1>

            <Tile4 linkTo={"Barry/welcome"} image="https://static0.fitbit.com/images/profile/defaultProfile_100_male.png" name='Test User'/>


			</div>


      );
}
}