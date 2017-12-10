import React from "react";
import { IndexLink, Link } from "react-router";
export default class Symptoms extends React.Component{
    constructor(){
        super();
    }
    render(){
        console.log(this.props.user);
        return(

                <div class="col-xs-6">
            <div class="block">
                <btitle>Symptoms List</btitle>
                <hr/>

                    <ul>
                            <li>Headaches</li>
                            <li>Sore Throat</li>
                            <li>Chest Pain</li>
                            <li>Runny Nose</li>

                    </ul>
             </div>
        </div>

        );
    }
}