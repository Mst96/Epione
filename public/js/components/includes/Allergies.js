import React from "react";
import { IndexLink, Link } from "react-router";
export default class Allergies extends React.Component{
    constructor(){
        super();
    }
    render(){
        console.log(this.props.user);
        return(

                <div class="col-xs-6">
            <div class="block">
                <btitle>Allergy List</btitle>
                <hr/>

                    <ul>
                            <li>Dairy</li>
                            <li>Gluten</li>
                            <li>Dust</li>
                            <li>Shampoo</li>

                    </ul>
             </div>
        </div>

        );
    }
}