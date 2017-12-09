import React from 'react';
import Tile from "../components/includes/Tile";
import Fetch from 'react-fetch';
import ReactSpeedometer from 'react-d3-speedometer';
import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';
/*
let bloodpressure = require('../../../json_files/bloodpressure.json');
let bmi = require('../../../json_files/bmi.json');
let bodyfat = require('../../../json_files/bodyfat.json');
let bodywater = require('../../../json_files/bodywater.json');
let heartrate = require('../../../json_files/heartrate.json');
let respiratory = require('../../../json_files/respiratory.json');
let steps = require('../../../json_files/steps.json');
let weight = require('../../../json_files/weight.json');
*/
let bloodpressure = require('../../../json_files/gaugeData.json')['dataset']['bp'];
let bmi = require('../../../json_files/gaugeData.json')['dataset']['bmi'];
let bodyfat = require('../../../json_files/gaugeData.json')['dataset']['bfp'];
let bodywater = require('../../../json_files/gaugeData.json')['dataset']['bwp'];
let heartrate = require('../../../json_files/gaugeData.json')['dataset']['hr'];
let respiratory = require('../../../json_files/gaugeData.json')['dataset']['rr'];
let steps = require('../../../json_files/gaugeData.json')['dataset']['steps'];
let weight = require('../../../json_files/gaugeData.json')['dataset']['weight'];

export default class HealthGauge extends React.Component{
	constructor(props) {
		super(props);
		console.log(bloodpressure);

		var bloodpressureWeek = 0;
		var bloodpressureMonth = 0;
		var bloodpressureYear = 0;
		var bloodpressureOverall = 0;
		for ( var i = 0; i < bloodpressure.length; i++){
			//bloodpressureOverall.push({"value": bloodpressure[i].y})
		};

		for ( var i = bloodpressure.length - 7; i < bloodpressure.length; i++){
			bloodpressureWeek = bloodpressureWeek + bloodpressure[i].value
		};

		bloodpressureWeek = bloodpressureWeek / 7;

		if(bloodpressureWeek >= 105){
			var bPWRange = bloodpressureWeek - 105
		};

		if(bloodpressureWeek <= 105){
			var bPWRange = 105 - bloodpressureWeek
		};

		var bPWValue = (100 - (bPWRange * (85 / 100))).toFixed(2);

		for ( var i = bloodpressure.length - 30; i < bloodpressure.length; i++){
			bloodpressureMonth = bloodpressureMonth + bloodpressure[i].value
		};

		bloodpressureMonth = bloodpressureMonth / 30;

		if(bloodpressureMonth >= 105){
			var bPMRange = bloodpressureMonth - 105
		};

		if(bloodpressureMonth <= 105){
			var bPMRange = 105 - bloodpressureMonth
		};

		var bPMValue = (100 - (bPMRange * (85 / 100))).toFixed(2);

		for ( var i = bloodpressure.length - 365; i < bloodpressure.length; i++){
			bloodpressureYear = bloodpressureYear + bloodpressure[i].value
		};

		bloodpressureYear = bloodpressureYear / 365;

		if(bloodpressureYear >= 105){
			var bPYRange = bloodpressureYear - 105
		};

		if(bloodpressureYear <= 105){
			var bPYRange = 105 - bloodpressureYear
		};

		var bPYValue = (100 - (bPYRange * (85 / 100))).toFixed(2);

		for ( var i = 0; i < bloodpressure.length; i++){
			bloodpressureOverall = bloodpressureOverall + bloodpressure[i].value
		};

		bloodpressureOverall = bloodpressureOverall / bloodpressure.length;

		if(bloodpressureOverall >= 105){
			var bPORange = bloodpressureOverall - 105
		};

		if(bloodpressureOverall <= 105){
			var bPORange = 105 - bloodpressureOverall
		};

		var bPOValue = (100 - (bPORange * (85 / 100))).toFixed(2);

		
		this.state = {
			componentWidth: window.innerWidth - 100,
			componentHeight: window.innerHeight - 100,
			windowHeight: window.innerHeight - 100,
			bPW: bPWValue, bPM: bPMValue, bPY: bPYValue, bPO: bPOValue,
		};
		console.log(bPWValue);
		console.log(bPMValue);
		console.log(bPYValue);
		console.log(bPOValue);

		this.handleResize = this.handleResize.bind(this);
	}

	componentDidMount() {
		window.addEventListener('resize', this.handleResize);
		this.handleResize();
		
	}
  
	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize);
	}

	handleResize() {
		this.setState({
			windowWidth: window.innerWidth - 100,
			componentWidth: this.myInput.offsetWidth
		});
	}

	render(){
	    return(
			<div class="container">
				<div class="row">
					<div class="col-sm-12 col-lg-15" ref="block">
						<div class="block" ref={input => {this.myInput = input}}>
							<link href="../../../css/mui.min.css" rel="stylesheet" type="text/css" media="screen" />
							<Tabs justified={true} onChange={this.onChange}>
								<Tab value="Week" label="Week">
									<Tabs justified={true} onChange={this.onChange}>
										<Tab value="Overall" label="Overall">
											
										</Tab>
										<Tab value="Vitals" label="Vitals">
											<Tabs justified={true} onChange={this.onChange}>
												<Tab value="Heart Rate" label="Heart Rate">
													<ReactSpeedometer
														value={60}
														minValue={0}
														maxValue={100}
														ringWidth={100}
														forceRender={true}
														segments={5}
														needleColor={'#5DADE2'}
														width={this.state.componentWidth - 20}
														height={this.state.componentWidth * 0.52}
														needleTransition="easeElastic"
													/>
												</Tab>
												<Tab value="Blood Pressure" label="Blood Pressure">
													<ReactSpeedometer
														value={this.state.bPW}
														minValue={0}
														maxValue={100}
														ringWidth={100}
														forceRender={true}
														segments={5}
														needleColor={'#5DADE2'}
														width={this.state.componentWidth - 20}
														height={this.state.componentWidth * 0.53}
														needleTransition="easeElastic"
													/>	
												</Tab>
												<Tab value="Temperature" label="Temperature">
												</Tab>
												<Tab value="Respiratory Rate" label="Respiratory Rate">
												</Tab>
											</Tabs>
										</Tab>
										<Tab value="Body" label="Body">
											<Tabs justified={true} onChange={this.onChange}>
												<Tab value="Weight" label="Weight">
													<ReactSpeedometer
														value={60}
														minValue={0}
														maxValue={100}
														ringWidth={100}
														forceRender={true}
														segments={5}
														needleColor={'#5DADE2'}
														width={this.state.componentWidth - 20}
														height={this.state.componentWidth * 0.52}
														needleTransition="easeElastic"
													/>
												</Tab>
												<Tab value="BMI" label="BMI">
												</Tab>
											</Tabs>
										</Tab>
										<Tab value="Activity" label="Activity">
											<Tabs justified={true} onChange={this.onChange}>
												<Tab value="Steps" label="Steps">
													<ReactSpeedometer
														value={60}
														minValue={0}
														maxValue={100}
														ringWidth={100}
														forceRender={true}
														segments={5}
														needleColor={'#5DADE2'}
														width={this.state.componentWidth - 20}
														height={this.state.componentWidth * 0.52}
														needleTransition="easeElastic"
													/>
												</Tab>
												<Tab value="Distance" label="Distance">
												</Tab>
												<Tab value="Sleep" label="Sleep">
												</Tab>
											</Tabs>
										</Tab>
									</Tabs>
								</Tab>
								<Tab value="Month" label="Month">
									<Tabs justified={true} onChange={this.onChange}>
										<Tab value="Overall" label="Overall">
											<ReactSpeedometer
												value={60}
												minValue={0}
												maxValue={100}
												ringWidth={100}
												forceRender={true}
												segments={5}
												needleColor={'#5DADE2'}
												width={this.state.componentWidth - 20}
												height={this.state.componentWidth * 0.52}
												needleTransition="easeElastic"
											/>	
										</Tab>
										<Tab value="Vitals" label="Vitals">
											<Tabs justified={true} onChange={this.onChange}>
												<Tab value="Heart Rate" label="Heart Rate">
												</Tab>
												<Tab value="Blood Pressure" label="Blood Pressure">
													<ReactSpeedometer
														value={this.state.bPM}
														minValue={0}
														maxValue={100}
														ringWidth={100}
														forceRender={true}
														segments={5}
														needleColor={'#5DADE2'}
														width={this.state.componentWidth - 20}
														height={this.state.componentWidth * 0.53}
														needleTransition="easeElastic"
													/>
												</Tab>
												<Tab value="Temperature" label="Temperature">
												</Tab>
												<Tab value="Respiratory Rate" label="Respiratory Rate">
												</Tab>
											</Tabs>
										</Tab>
										<Tab value="Body" label="Body">
											<Tabs justified={true} onChange={this.onChange}>
												<Tab value="Weight" label="Weight">
												</Tab>
												<Tab value="BMI" label="BMI">
												</Tab>
											</Tabs>
										</Tab>
										<Tab value="Activity" label="Activity">
											<Tabs justified={true} onChange={this.onChange}>
												<Tab value="Steps" label="Steps">
												</Tab>
												<Tab value="Distance" label="Distance">
												</Tab>
												<Tab value="Sleep" label="Sleep">
												</Tab>
											</Tabs>
										</Tab>
									</Tabs>
								</Tab>
								<Tab value="Year" label="Year">
									<Tabs justified={true} onChange={this.onChange}>
										<Tab value="Overall" label="Overall">
											<ReactSpeedometer
												value={60}
												minValue={0}
												maxValue={100}
												ringWidth={100}
												forceRender={true}
												segments={5}
												needleColor={'#5DADE2'}
												width={this.state.componentWidth - 20}
												height={this.state.componentWidth * 0.52}
												needleTransition="easeElastic"
											/>	
										</Tab>
										<Tab value="Vitals" label="Vitals">
											<Tabs justified={true} onChange={this.onChange}>
												<Tab value="Heart Rate" label="Heart Rate">
													<ReactSpeedometer
														value={60}
														minValue={0}
														maxValue={100}
														ringWidth={100}
														forceRender={true}
														segments={5}
														needleColor={'#5DADE2'}
														width={this.state.componentWidth - 20}
														height={this.state.componentWidth * 0.52}
														needleTransition="easeElastic"
													/>
												</Tab>
												<Tab value="Blood Pressure" label="Blood Pressure">
													<ReactSpeedometer
														value={this.state.bPY}
														minValue={0}
														maxValue={100}
														ringWidth={100}
														forceRender={true}
														segments={5}
														needleColor={'#5DADE2'}
														width={this.state.componentWidth - 20}
														height={this.state.componentWidth * 0.53}
														needleTransition="easeElastic"
													/>	
												</Tab>
												<Tab value="Temperature" label="Temperature">
												</Tab>
												<Tab value="Respiratory Rate" label="Respiratory Rate">
												</Tab>
											</Tabs>
										</Tab>
										<Tab value="Body" label="Body">
											<Tabs justified={true} onChange={this.onChange}>
												<Tab value="Weight" label="Weight">
													<ReactSpeedometer
														value={60}
														minValue={0}
														maxValue={100}
														ringWidth={100}
														forceRender={true}
														segments={5}
														needleColor={'#5DADE2'}
														width={this.state.componentWidth - 20}
														height={this.state.componentWidth * 0.52}
														needleTransition="easeElastic"
													/>
												</Tab>
												<Tab value="BMI" label="BMI">
												</Tab>
											</Tabs>
										</Tab>
										<Tab value="Activity" label="Activity">
											<Tabs justified={true} onChange={this.onChange}>
												<Tab value="Steps" label="Steps">
												</Tab>
												<Tab value="Distance" label="Distance">
												</Tab>
												<Tab value="Sleep" label="Sleep">
												</Tab>
											</Tabs>
										</Tab>
									</Tabs>
								</Tab>
								<Tab value="All Time" label="All Time">
									<Tabs justified={true} onChange={this.onChange}>
										<Tab value="Overall" label="Overall">
											<ReactSpeedometer
												value={60}
												minValue={0}
												maxValue={100}
												ringWidth={100}
												forceRender={true}
												segments={5}
												needleColor={'#5DADE2'}
												width={this.state.componentWidth - 20}
												height={this.state.componentWidth * 0.52}
												needleTransition="easeElastic"
											/>	
										</Tab>
										<Tab value="Vitals" label="Vitals">
											<Tabs justified={true} onChange={this.onChange}>
												<Tab value="Heart Rate" label="Heart Rate">
													<ReactSpeedometer
														value={60}
														minValue={0}
														maxValue={100}
														ringWidth={100}
														forceRender={true}
														segments={5}
														needleColor={'#5DADE2'}
														width={this.state.componentWidth - 20}
														height={this.state.componentWidth * 0.52}
														needleTransition="easeElastic"
													/>
												</Tab>
												<Tab value="Blood Pressure" label="Blood Pressure">
													<ReactSpeedometer
														value={this.state.bPO}
														minValue={0}
														maxValue={100}
														ringWidth={100}
														forceRender={true}
														segments={5}
														needleColor={'#5DADE2'}
														width={this.state.componentWidth - 20}
														height={this.state.componentWidth * 0.53}
														needleTransition="easeElastic"
													/>	
												</Tab>
												<Tab value="Temperature" label="Temperature">
												</Tab>
												<Tab value="Respiratory Rate" label="Respiratory Rate">
												</Tab>
											</Tabs>
										</Tab>
										<Tab value="Body" label="Body">
											<Tabs justified={true} onChange={this.onChange}>
												<Tab value="Weight" label="Weight">
													<ReactSpeedometer
														value={60}
														minValue={0}
														maxValue={100}
														ringWidth={100}
														forceRender={true}
														segments={5}
														needleColor={'#5DADE2'}
														width={this.state.componentWidth - 20}
														height={this.state.componentWidth * 0.52}
														needleTransition="easeElastic"
													/>
												</Tab>
												<Tab value="BMI" label="BMI">
												</Tab>
											</Tabs>
										</Tab>
										<Tab value="Activity" label="Activity">
											<Tabs justified={true} onChange={this.onChange}>
												<Tab value="Steps" label="Steps">
												</Tab>
												<Tab value="Distance" label="Distance">
												</Tab>
												<Tab value="Sleep" label="Sleep">
												</Tab>
											</Tabs>
										</Tab>
									</Tabs>
								</Tab>
							</Tabs>
						</div>
					</div>
				</div> 
			</div>
		);
	}
}

