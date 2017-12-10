import React from 'react';
import { render } from 'react-dom';
// import { Chart } from 'react-google-charts';
import {LineChart} from 'react-easy-chart';
import axios from 'axios';
import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';
// import RTChart from 'react-rt-chart';
// let data = require('../../../test.json')["activities-heart-intraday"]["dataset"];
let data = require('../../../json/bloodpressure/bloodpressure-realtime.json');
let day = require('../../../json/bloodpressure/bloodpressure-day.json');
let week = require('../../../json/bloodpressure/bloodpressure-week.json');
let month = require('../../../json/bloodpressure/bloodpressure-month.json');
let year = require('../../../json/bloodpressure/bloodpressure-year.json');
let users = require('../../../json/users.json');
 
export default class BloodPressurePage extends React.Component {
   constructor(props) {
    super(props);
    this.state = {data: [],
      user: {},
      day: day,
      week: week,
      month: month,
      year: year, 
      current: 105,
      showToolTip: false,
      top: 0,
      left: 0,
      x: 0,
      y: 0
    };
  }
  componentDidMount() {
    var rate;
    var array = [];
    // var d = new Date();
    for (var i = 0; i <= 5; i++) {
      // var h = this.addZero(d.getUTCHours());
      // var m = this.addZero(d.getUTCMinutes() + i);
      rate = Math.floor((Math.random() * 10) + 101);
      array.push({"x": i, "y": rate});
    };
    var param = this.props.params.user;
      var user = users.filter(function(user){
          if(user.firstName === param){
              return user;
          }
      })
    this.setState({ data: array, user: user[0] });
    var i = 5;
    setInterval(() => {
      if(i > 15){
        array.shift();
      }
      array.push({"x": data[i].x, "y": data[i].y})
      // if(data[i].y > 120) this.notify(this.state.user + "Has a Dangerously High Blood Pressure");
      // if(data[i].y < 50) this.notify(this.state.user + "Has a Dangerously Low Blood Pressure");
      this.setState({ data: array, current : data[i].y});
      i++;
  }, 3000);
  }

  
  render() {
    var stuff = this.state.data;
    var tooltip = null;
    if(this.state.showToolTip) {
      tooltip = this.selected();
    }
    return (
      <div>
      <h1>{this.state.user.firstName}'s Current Blood Pressure: {this.state.current}</h1>;
      {tooltip}
      <button onClick={() => {this.notify(this.state.user.firstName + " has a Dangerously High Blood Pressure")}}>Test Notification</button>
      <link href="../../../css/mui.min.css" rel="stylesheet" type="text/css" media="screen" />
      <Tabs justified={true} onChange={this.onChange}>
        <Tab value="Realtime" label="Realtime">
          <LineChart
            xType={'text'}
            yDomainRange={[40, 140]}
            axes
            dataPoints
            mouseOverHandler={this.mouseOverHandler}
            mouseOutHandler={this.mouseOutHandler}
            width={750}
            height={500}
            grid
            axisLabels={{x: 'Reading', y: 'Blood Pressure (mmHg)'}}
          data={[this.state.data]}/>
        </Tab>
        <Tab value="Past Day" label="Past Day">
          <LineChart
            xType={'text'}
            yDomainRange={[40, 140]}
            axes
            dataPoints
            mouseOverHandler={this.mouseOverHandler}
            mouseOutHandler={this.mouseOutHandler}
            width={750}
            height={500}
            grid
            axisLabels={{x: 'Reading', y: 'Average Blood Pressure (mmHg)'}}
          data={[this.state.day]}/>
        </Tab>
        <Tab value="Past Week" label="Past Week">
          <LineChart
            xType={'text'}
            yDomainRange={[40, 140]}
            axes
            dataPoints
            mouseOverHandler={this.mouseOverHandler}
            mouseOutHandler={this.mouseOutHandler}
            width={750}
            height={500}
            grid
            axisLabels={{x: 'Reading', y: 'Average Blood Pressure (mmHg)'}}
          data={[this.state.week]}/>
        </Tab>
        <Tab value="Past Month" label="Past Month">
          <LineChart
            xType={'text'}
            yDomainRange={[40, 140]}
            axes
            dataPoints
            mouseOverHandler={this.mouseOverHandler}
            mouseOutHandler={this.mouseOutHandler}
            width={750}
            height={500}
            grid
            axisLabels={{x: 'Reading', y: 'Average Blood Pressure (mmHg)'}}
          data={[this.state.month]}/>
        </Tab>
        <Tab value="Past Year" label="Past Year">
          <LineChart
            xType={'text'}
            yDomainRange={[40, 140]}
            axes
            dataPoints
            mouseOverHandler={this.mouseOverHandler}
            mouseOutHandler={this.mouseOutHandler}
            width={750}
            height={500}
            grid
            axisLabels={{x: 'Reading', y: 'Average Blood Pressure (mmHg)'}}
          data={[this.state.year]}/>
        </Tab>
      </Tabs> 

            </div>
    );
  }
  selected(){
    return (<h1><h1>{this.state.user.firstName}'s Blood Pressure at {this.state.x} is {this.state.y}</h1></h1>);
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

  notify(message){
    axios.post('/api/notify', {message: message})
    .then(success =>{
        console.log(success);
        });
  }
  }