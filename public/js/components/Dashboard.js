import React from 'react';
import Tile from "../components/includes/Tile";
import HeartRate from "../components/includes/HeartRate";
export default class Dashboard extends React.Component{
render(){
return(
            <div class="container">

    <div class="row">
    
        <Tile image="https://static0.fitbit.com/images/profile/defaultProfile_100_male.png" name='Profile' line1='name' line2='email@email.com'/>
        
        <HeartRate/>

        <div class="col-sm-4 col-lg-4">
            <div class="col-sm-12 col-lg-12">
                <div class="block">
                    <btitle>Last Sync</btitle>
                    <hr/>
                    <div class="text-center">
                        <i class="fa fa-refresh fa-1x" aria-hidden="true"></i>
                        <p>29/10/2017 - 7:48 pm</p>
                    </div>
                </div>
            </div>
            
            <div class="mt-2 col-sm-12 col-lg-12">
                <div class="block">
                    <btitle>Settings</btitle>
                    <hr/>
                    <div class="text-center">
                        <i class="fa fa-cogs fa-3x" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
</div>
        );
}
}