import React from "react";
import { IndexLink, Link } from "react-router";
export default class Tile2 extends React.Component{
    constructor(){
        super();
    }
    render(){
            const image = this.props.image;
            const tileName = this.props.name;
            const line1 = this.props.line1;
            const line2 = this.props.line2;
            const linkTo = this.props.linkTo;
        return(

                <div class="col-xs-12">
                <Link to={linkTo}>
                    <div class="block">
                        <btitle>{tileName}</btitle>
                        <hr/>
                        <div class="thumbnail">
                            <img src={image} alt="name" class="img-thumbnail"/>
                        </div>
                        <h2>{line1}</h2>
                        <h3>{line2}</h3>
                    </div>
                    </Link>
                </div>
        );
    }
}