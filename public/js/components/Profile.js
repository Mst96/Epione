import React from 'react';
import Tile from "../components/includes/Tile";
import HeartRate from "../components/includes/HeartRate";
import Allergies from "../components/includes/Allergies";
import Symptoms from "../components/includes/Symptoms";
import Fetch from 'react-fetch';
import { Link } from "react-router";
let profile = require('../../profile-test.json');

export default class Dashboard extends React.Component{
render(){
    console.log(profile);
return(
            <div class="container">
    <div class="row">
    
        <Tile image="https://static0.fitbit.com/images/profile/defaultProfile_100_male.png" name='Name' line1={profile.user.displayName} line2={profile.user.age}/>
        <Tile image="http://mgla.asn.au/wp-content/uploads/2017/06/icon-age.png" name='age' line1={"Age:"} line2={profile.user.age}/>
        <Tile image="https://png.icons8.com/?id=19420&size=2x" name='Height' line1={"Current Height:"} line2={profile.user.age}/>
        <Tile image="https://png.icons8.com/?id=37167&size=2x" name='Weight' line1={"Current Weight:"} line2={profile.user.age}/>
    
        <Allergies/>
        <Symptoms/>


            
            <div class="mt-2 col-sm-12 col-lg-4">
                <div class="block">
                 <Link to={'/Patient/dashboard'}>  <btitle>Back to Dashboard</btitle></Link>
                    <hr/>
                    <div class="text-center">
                        <i class="fa fa-cogs fa-3x" aria-hidden="true"></i>
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