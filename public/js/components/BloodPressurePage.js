import React from 'react';
import { render } from 'react-dom';
// import { Chart } from 'react-google-charts';
import {LineChart} from 'react-easy-chart';
import axios from 'axios';
// import RTChart from 'react-rt-chart';
// let data = require('../../../test.json')["activities-heart-intraday"]["dataset"];
let data = require('../../../json/bloodpressure.json')["data"];

 
export default class BloodPressurePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: [], current: 0};
  }
  componentDidMount() {
    this.notify();
    this.notifyLow();
    var rate;
    var array = [];
    var d = new Date();
    for (var i = 0; i <= 5; i++) {
      var h = this.addZero(d.getUTCHours());
      var m = this.addZero(d.getUTCMinutes() + i);
      rate = Math.floor((Math.random() * 20) + 90);
      array.push({"x": h + ":" + m, "y": rate});
    };
    this.setState({ data: array });
    var i = 5;
    setInterval(() => {
      if(i > 15){
        console.log("yo");
        console.log(array.length);
        array.shift();
        console.log(array.length);
      }
      array.push({"x": data[i].x, "y": data[i].y})
      if(data[i].y > 135) this.notify();
      if(data[i].y < 85) this.notifyLow();
      this.setState({ data: array, current : data[i].y});
      i++;
  }, 3000);
  }

  
  render() {
    var stuff = this.state.data;
    return (
      <div>
      <h1>Current Blood Pressure: {this.state.current}</h1>;
      <LineChart
      xType={'text'}
      yDomainRange={[70, 160]}
      axes
      dataPoints
      width={750}
      height={500}
      grid
      axisLabels={{x: 'Reading', y: 'Blood Pressure (mmHg)'}}
    data={[this.state.data]}/>
            </div>
    );
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

  notify(){
    axios.post('/api/notify', {message: "High Blood Pressure"})
    .then(success =>{
        console.log(success);
        });
  }

  notifyLow(){
    axios.post('/api/notify', {message: "High Low Blood Pressure"})
    .then(success =>{
        console.log(success);
        });
  }
}