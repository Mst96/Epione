import React from 'react';
import Tile from "../components/includes/Tile";
import HeartRate from "../components/includes/HeartRate";
import Allergies from "../components/includes/Allergies";
import Symptoms from "../components/includes/Symptoms";
import Fetch from 'react-fetch';
import { Link } from "react-router";
let profile = require('../../profile-test.json');

export default class Usersettings extends React.Component{
render(){
    console.log(profile);
return(
            <div class="container">
    <div class="row">
    
            
            <div class="mt-2 col-sm-12 col-lg-4">
                <div class="block">
                    <btitle>Monday</btitle>
                    <hr/>
                    
                    <div class="text-center">
                    <p>Goal: 5000 Steps</p>
                    <p>Achieved: 6000 Steps</p>
                    <p>Well Done, {profile.user.displayName}, you have completed your goal for today!   </p>
                        
                    </div>
                </div>
            </div>

             <div class="mt-2 col-sm-12 col-lg-4">
                <div class="block">
                    <btitle>Tuesday</btitle>
                    <hr/>
                    <div class="text-center">
                    <p>Goal: 10000 Steps</p>
                    <p>Achieved: 9500 Steps</p>
                    <p>So close, {profile.user.displayName}! Today you reached 9500 steps, good effort! Why not set the same goal again tomorrow and see if you can beat it?  </p>
                    </div>
                </div>
            </div>

            <div class="mt-2 col-sm-12 col-lg-4">
                <div class="block">
                    <btitle>Wednesday</btitle>
                    <hr/>
                    <div class="text-center">
                    <p>Goal: 1500 Steps</p>
                    <p>Achieved: 7000 Steps</p>
                    <p>Well Done, {profile.user.displayName}, you have completed your goal for today! Why not challenge yourself to acheive 3 goals in a row?  </p>
                    </div>
                </div>
            </div>

            <div class="mt-2 col-sm-12 col-lg-4">
                <div class="block">
                    <btitle>Thursday</btitle>
                    <hr/>
                    <div class="text-center">
                    <p>Goal: 5000 Steps</p>
                    <p>Achieved: 6000 Steps</p>
                    <p>Well Done, {profile.user.displayName}, you have completed your goal for today!   </p>
                    </div>
                </div>
            </div>

             <div class="mt-2 col-sm-12 col-lg-4">
                <div class="block">
                    <btitle>Friday</btitle>
                    <hr/>
                    <div class="text-center">
                    <p>Goal: 8500 Steps</p>
                    <p>Achieved: 8500 Steps</p>
                    <p>Well Done, {profile.user.displayName}, you have completed your goal for today! You have completed 3 goals in a row! Congratulations. Remember to keep it up! </p>
                    </div>
                </div>
            </div>

               <div class="mt-2 col-sm-12 col-lg-4">
                <div class="block">
                    <btitle>Saturday</btitle>
                    <hr/>
                    <div class="text-center">
                    <p>Goal: 8000 Steps</p>
                    <p>Achieved: 6000 Steps</p>
                    <p>Nearly there, {profile.user.displayName}, you were just under your goal for today. Try and complete your goal tomorrow instead! </p>
                    </div>
                </div>
            </div>

              <div class="mt-2 col-sm-12 col-lg-4">
                <div class="block">
                    <btitle>Sunday</btitle>
                    <hr/>
                    <div class="text-center">
                    <p>Goal: 8500 Steps</p>
                    <p>Achieved: 8500 Steps</p>
                    <p>Well Done, {profile.user.displayName}, you have completed your goal for today!  </p>
                    </div>
                </div>
            </div>

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