import React from 'react';
import { Link } from "react-router";
import Tile from "../components/includes/Tile";
import User from "../components/includes/User";
import HeartRate from "../components/includes/HeartRate";
import Fetch from 'react-fetch';
let users = require('../../../users.json');

export default class Dashboard extends React.Component{
render(){
return(
            <div class="container">
                    {users.map(function(user, index){
                        if(Math.floor((Math.random() * 2))){
                                    return <Link to={`/dashboard`}><User users={user} key={index}/></Link>
                          }
                        }
                        )}
        	            }
            </div>
        );
}

}
