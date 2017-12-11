import React from 'react';
import { render } from 'react-dom';
// import { Chart } from 'react-google-charts';
import {LineChart} from 'react-easy-chart';
import axios from 'axios';
import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';
// import RTChart from 'react-rt-chart';
// let data = require('../../../test.json')["activities-heart-intraday"]["dataset"];
let week = require('../../../json/sleep/sleep-week.json');
let month = require('../../../json/sleep/sleep-month.json');
let year = require('../../../json/sleep/sleep-year.json');
let users = require('../../../json/users.json');
 
export default class SleepPage extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      user: {},
      week: week,
      month: month,
      year: year, 
      current: 7.6,
      showToolTip: false,
      top: 0,
      left: 0,
      x: 0,
      y: 0,
      componentWidth: 300,
    };

    this.handleResize = this.handleResize.bind(this);
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

  render() {
    var stuff = this.state.data;
    var tooltip = null;
    if(this.state.showToolTip) {
      tooltip = this.selected();
    }
    return (
    	<div class="container">
			<div class="row">
				<div class="col-sm-12 col-lg-12" ref="block">
					<div class="block" ref={input => {this.myInput = input}}>
						<btitle>Sleep</btitle>
				        <h1>{this.state.user.firstName} slept for {this.state.current} hours last night</h1>;
				        <link href="../../../css/mui.min.css" rel="stylesheet" type="text/css" media="screen" />
				        <Tabs justified={true} onChange={this.onChange}>
				          <Tab value="Past Week" label="Past Week">
				            <LineChart
				              xType={'text'}
				              yDomainRange={[0, 15]}
				              axes
				              dataPoints
				              lineColors={['#5DADE2']}
				              mouseOverHandler={this.mouseOverHandler}
							  width = {this.state.componentWidth - 100}
				              height={this.state.componentWidth / 2}
				              grid
				              axisLabels={{x: 'Day', y: 'Hours of Sleep'}}
				            data={[this.state.week]}/>
				          </Tab>
				          <Tab value="Past Month" label="Past Month">
				            <LineChart
				              xType={'text'}
				              yDomainRange={[0, 15]}
				              axes
				              dataPoints
				              lineColors={['#5DADE2']}
				              mouseOverHandler={this.mouseOverHandler}
							  width = {this.state.componentWidth - 100}
				              height={this.state.componentWidth / 2}
				              grid
				              axisLabels={{x: 'Day', y: 'Hours of Sleep'}}
				            data={[this.state.month]}/>
				          </Tab>
				          <Tab value="Past Year" label="Past Year">
				            <LineChart
				              xType={'text'}
				              yDomainRange={[0, 15]}
				              axes
				              dataPoints
				              lineColors={['#5DADE2']}
				              mouseOverHandler={this.mouseOverHandler}
							  width = {this.state.componentWidth - 100}
				              height={this.state.componentWidth / 2}
				              grid
				              axisLabels={{x: 'Month', y: 'Average hours of Sleep'}}
				            data={[this.state.year]}/>
				          </Tab>
				        </Tabs>
			        </div>
				</div>
			</div>
			{tooltip}
      </div>
    );
  }
  selected(){
  	if( this.state.x == 1 || this.state.x == 21 || this.state.x == 31  )
		{
			return (<h1>On the {this.state.x}st, {this.state.user.firstName} slept for {this.state.y} hours</h1>);
		} else if( this.state.x == 2 || this.state.x == 22 )
		{
			return (<h1>On the {this.state.x}nd, {this.state.user.firstName} slept for {this.state.y} hours</h1>);
		} else if( this.state.x == 3 || this.state.x == 23 )
		{
			return (<h1>On the {this.state.x}rd, {this.state.user.firstName} slept for {this.state.y} hours</h1>);
		} else
		{
			return (<h1>On the {this.state.x}th, {this.state.user.firstName} slept for {this.state.y} hours</h1>);
		}
  }
  addZero(i) {
    if(i >= 60){
      i = i % 60;
    }
    if (i < 10) {
        i = "0" + i;
    }
    return i;
  }
  mouseOverHandler = (d, e) => {
    this.setState({
      showToolTip: true,
      top: `${e.screenY - 10}px`,
      left: `${e.screenX + 10}px`,
      y: d.y,
      x: d.x});
  }
}