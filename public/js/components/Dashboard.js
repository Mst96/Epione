import React from 'react';
import Tile from "../components/includes/Tile";
import HeartRate from "../components/includes/HeartRate";
import Fetch from 'react-fetch';
let profile = require('../../profile-test.json');

export default class Dashboard extends React.Component{
render(){
    console.log(profile);
return(
            <div class="container">
    <div class="row">
    
        <Tile image="https://static0.fitbit.com/images/profile/defaultProfile_100_male.png" name='Profile' line1={profile.user.displayName} line2={profile.user.age}/>
        
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

ComponentDidMount() {
// fetch('https://epione.oobazee.com/profile-test.json')
// .then(results =>{ 
//     return results.json();
// }).then(data =>{
//     let profile = data.results.map((item)=>{
//         return(
//             <div key={item.user.displayName}>
//             </div>
//             )
//     })
// })

}

}