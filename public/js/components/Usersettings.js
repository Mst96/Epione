import React from 'react';
import Tile from "../components/includes/Tile";
import HeartRate from "../components/includes/HeartRate";
import Allergies from "../components/includes/Allergies";
import Symptoms from "../components/includes/Symptoms";
import Fetch from 'react-fetch';
import { Link } from "react-router";
let profile = require('../../profile-test.json');

export default class Usersettings extends React.Component{
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
return(
            <div class="container">
    <div class="row">
    
   


            
            <div class="mt-2 col-sm-12 col-lg-4">
                <div class="block">
                    <btitle>Edit Name</btitle>
                    <hr/>
                    <div class="text-center">
                    <p>Current Name: {profile.user.displayName} </p>
                        <i class="fa fa-cogs fa-3x" aria-hidden="true"></i>
                    </div>
                </div>
            </div>


              <div class="mt-2 col-sm-12 col-lg-4">
                <div class="block">
                    <btitle>Edit Height</btitle>
                    <hr/>
                    <div class="text-center">
                     <p>Current Height: {profile.user.age} </p>
                        <i class="fa fa-cogs fa-3x" aria-hidden="true"></i>
                    </div>
                </div>
            </div>


              <div class="mt-2 col-sm-12 col-lg-4">
                <div class="block">
                    <btitle>Edit Weight</btitle>
                    <hr/>
                    <div class="text-center">
                    <p>Current Weight: {profile.user.age} </p>
                        <i class="fa fa-cogs fa-3x" aria-hidden="true"></i>
                    </div>
                </div>
            </div>


             <div class="mt-2 col-sm-12 col-lg-4">
                <div class="block">
                    <btitle>Edit Gender</btitle>
                    <hr/>
                    <div class="text-center">
                    <p>Current Gender: Male</p>
                        <i class="fa fa-cogs fa-3x" aria-hidden="true"></i>
                    </div>
                </div>
            </div>


             <div class="mt-2 col-sm-12 col-lg-4">
                <div class="block">
                    <btitle>Edit D.O.B</btitle>
                    <hr/>
                    <div class="text-center">
                    <p>Current D.O.B: 24/12/1986</p>
                        <i class="fa fa-cogs fa-3x" aria-hidden="true"></i>
                    </div>
                </div>
            </div>


             <div class="mt-2 col-sm-12 col-lg-4">
                <div class="block">
                    <btitle>Edit Address</btitle>
                    <hr/>
                    <div class="text-center">
                    <p>Current Address: 34 Kings Avenue</p>
                        <i class="fa fa-cogs fa-3x" aria-hidden="true"></i>
                    </div>
                </div>
            </div>


             <div class="mt-2 col-sm-12 col-lg-4">
                <div class="block">
                    <btitle>Edit Email</btitle>
                    <hr/>
                    <div class="text-center">
                    <p>Current Email: Johnson@mail.com</p>
                        <i class="fa fa-cogs fa-3x" aria-hidden="true"></i>
                    </div>
                </div>
            </div>


             <div class="mt-2 col-sm-12 col-lg-4">
                <div class="block">
                    <btitle>Edit Phome</btitle>
                    <hr/>
                    <div class="text-center">
                    <p>Current Phone: 0800 00 1990</p>
                        <i class="fa fa-cogs fa-3x" aria-hidden="true"></i>
                    </div>
                </div>
            </div>

            <div class="mt-2 col-sm-12 col-lg-4">
                <div class="block">
                    <Link to={'/' + this.state.user.firstName + '/dashboard'}>  <btitle>Back to Dashboard</btitle></Link>
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