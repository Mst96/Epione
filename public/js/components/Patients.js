import React from 'react';
import { Link } from "react-router";
import User from "../components/includes/User";
import Fetch from 'react-fetch';
let users = require('../../../json/users.json');

export default class Dashboard extends React.Component{
render(){
return(
        <div class="container">
        {users.map(function(user, index){
        	if(Math.floor((Math.random() * 2))){
        		return <Link to={"/"+user["firstName"]+"/dashboard"}><User users={user} key={index}/></Link>
              }
            }
              )}
        </div>
        );
}

}
