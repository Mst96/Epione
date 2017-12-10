import React from 'react'
import Tile from "./includes/Tile";

let data = require('../../../test.json')["activities-heart-intraday"]["dataset"];
let users = require('../../../json/users.json');


export default class EpioneScale extends React.Component{
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

    
return (
  <div class="col-sm-3 col-lg-12">
  <div class="block">
      
  </div>
  </div>


        );
}
}

