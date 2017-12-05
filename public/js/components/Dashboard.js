import React from 'react';
import Tile from "../components/includes/Tile";
import Tile2 from "../components/includes/Tile2";
import Tile3 from "../components/includes/Tile3";

import Fetch from 'react-fetch';


let profile = require('../../profile-test.json');
let users = require('../../../users.json');

export default class Dashboard extends React.Component{
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
return(
    <div class="container">
        <div class="row">
       
    
            
            <Tile2 linkTo={"/epionegraph"} image="https://www.numetriclabz.com/wp-content/uploads/2016/01/Gauge-chart.png" name='EPIONE Scale'/>  
            <Tile3 linkTo={"/vitals"} image="http://sites.austincc.edu/back-to-work-fifty-plus/wp-content/uploads/sites/172/2017/02/HealthIcon-100px.png" name='Vitals'/>
            <Tile3 linkTo={"/body"} image="https://png.icons8.com/ios/2x/standing-man.png" name='Body'/>
            <Tile3 linkTo={"/symptom"} image="http://is1.mzstatic.com/image/thumb/Purple127/v4/17/b0/bc/17b0bc22-6ff3-b5e3-8b3d-bfe08b5ad016/mzl.rcqmzuse.png/100x100bb-85.png" name='Symptoms'/>
            <Tile3 linkTo={"/activity"} image="http://www.blast.fit/wp-content/uploads/2016/06/Movement-Icon-2-e1465624354679.jpg" name='Activity'/>     
            <Tile3 linkTo={"/diary"} image="https://png.icons8.com/?id=14011&size=2x" name='Calendar'/>
            <Tile3 linkTo={"/settings"} image="https://png.icons8.com/ios/2x/settings.png" name='Settings'/>
            
                   
        

        </div>
    </div>
        );
}
}
