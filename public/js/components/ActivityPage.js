import React from 'react';
import Tile from "../components/includes/Tile";
import HeartRate from "../components/includes/HeartRate";
import Allergies from "../components/includes/Allergies";
import Symptoms from "../components/includes/Symptoms";
import Fetch from 'react-fetch';
import {BarChart} from 'react-easy-chart';

let profile = require('../../profile-test.json');
let data = require('../../../json/steps.json')["step-counter"]["dataset"];

export default class CalendarPage extends React.Component{
	constructor(props) {
		super(props);
		this.state = {data: []};
	}
	componentDidMount() {
		setInterval(() => {
			var array = [];
			for ( var i = 0; i <= this.state.data.length && i < data.length; i++){
				array.push({"x": data[i].day, "y": data[i].steps})
			};
			this.setState({ data: array})
		}, 10);
	}
   


	render(){
		var stuff = this.state.data;
		console.log(this.state.data);
		return(
			<div class="container">
				<div class="row">
					<div class="block">
						<btitle>Pedometer</btitle>
						<BarChart
							axes
							grid
							colorBars
							barWidth = {15}
							margin={{ top: 50, right: 0, bottom: 50, left: 80 }}
							width = {750}
							height = {200}
							axisLabels = {{x: "Day", y: "Number of Steps"}}
							data = {this.state.data}
						/>
					</div>
				</div>
			</div>
		);
	}
}