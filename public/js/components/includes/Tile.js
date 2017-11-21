import React from "react";
import { IndexLink, Link } from "react-router";
export default class Tile extends React.Component{
    constructor(){
        super();
    }
    render(){
            const image = this.props.image;
            const tileName = this.props.name;
            const line1 = this.props.line1;
            const line2 = this.props.line2;
        return(

                <div class="col-xs-6">
                    <div class="block">
                        <btitle>{tileName}</btitle>
                        <hr/>
                        <div class="thumbnail">
                            <img src={image} alt="name" class="img-thumbnail"/>
                        </div>
                        <p>{line1}</p>
                        <p>{line2}</p>
                    </div>
                </div>
        );
    }
}