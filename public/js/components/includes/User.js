import React from "react";
import { IndexLink, Link } from "react-router";
export default class Tile extends React.Component{
    constructor(){
        super();
    }
    render(){
            const image = this.props.users.avatar;
            const name = this.props.users.firstName;
        return(
                <div class="col-sm-6 col-lg-4 col-xs-6">
                    <div class="block">
                        <div class="thumbnail">
                            <img src={image} alt="name" class="img-thumbnail"/>
                        </div>
                        <p>{name}</p>
                    </div>
                </div>
        );
    }
}