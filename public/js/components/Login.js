import React from 'react';
import Tile from "../components/includes/Tile";
import Tile4 from "../components/includes/Tile4";
import Tile3 from "../components/includes/Tile3";
import Fetch from 'react-fetch';
export default class Login extends React.Component{

render(){
return(
       <div class="container">

    			<div class="row">
        		<div class="row">
            	<div class="col-md-8 col-md-offset-1">       
                <div>
                    <a href="api/login/google" class="btn btn-block btn-lg btn-social btn-google social-button">
                        <span class="fa fa-google"></span> login with Google
                    </a>
                </div>  

                <div>
                    <a href="api/login/-/fitbit" class="btn btn-block btn-lg btn-social btn-google social-button">
                        <span class="fa fa-google"></span> login with Fitbit
                    </a>
        
                </div>             
            	</div>
        	</div>
    		</div>

            <Tile4 linkTo={"/welcome"} image="https://static0.fitbit.com/images/profile/defaultProfile_100_male.png" name='Test User'/>


			</div>


      );
}
}