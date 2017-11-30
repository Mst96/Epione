import React from "react";
import { IndexLink, Link } from "react-router";
export default class HeartRate extends React.Component{
    constructor(){
        super();
    }
    render(){
        console.log(this.props.user);
        return(
                <div class="col-sm-3 col-lg-3">
            <div class="block">
                <btitle>Heart Rate</btitle>
                <hr/>
                <div class="heart-num-block text-right">
                    <i class="fa fa-heartbeat fa-4x" aria-hidden="true"></i>
                    <p><bold>90</bold></p>
                </div>

                <div class="heart-rate">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="150px" height="73px" viewBox="0 0 150 73" enableBackground="new 0 0 150 73">
                        <polyline fill="none" stroke="#009B9E" strokeWidth="3" strokeMiterlimit="10" points="0,45.486 38.514,45.486 44.595,33.324 50.676,45.486 57.771,45.486 62.838,55.622 71.959,9 80.067,63.729 84.122,45.486 97.297,45.486 103.379,40.419 110.473,45.486 150,45.486" />
                    // </svg>
                    <div class="fade-in"></div>
                    <div class="fade-out"></div>
                </div>

            </div>
        </div>

        );
    }
}