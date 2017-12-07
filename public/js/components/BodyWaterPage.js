import React from 'react';
import { render } from 'react-dom';
// import { Chart } from 'react-google-charts';
import {LineChart} from 'react-easy-chart';
import axios from 'axios';
// import RTChart from 'react-rt-chart';
// let data = require('../../../test.json')["activities-heart-intraday"]["dataset"];
let data = require('../../../bodywater.json')["data"];

 
export default class TemperaturePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: [], current: 0};
  }
  componentDidMount() {
    this.notify();
    var rate;
    var array = [];
    var d = new Date();
    for (var i = 0; i <= 5; i++) {
      var h = this.addZero(d.getUTCHours());
      var m = this.addZero(d.getUTCMinutes() + i);
      rate = Math.floor((Math.random() * 20) + 55);
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
      if(data[i].y > 120) this.notify();
      this.setState({ data: array });
      i++;
  }, 3000);
  }

  
  render() {
    var stuff = this.state.data;
    return (
      <div>
      <h1>Current Body Water Percentage: {this.state.current}</h1>;
      <LineChart
      xType={'text'}
      yDomainRange={[0, 120]}
      axes
      dataPoints
      width={750}
      height={500}
      grid
      axisLabels={{x: 'Reading', y: 'Body Water % Amount'}}
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
    axios.post('/api/notify', {message: "High Heart Rate"})
    .then(success =>{
        console.log(success);
        });
  }

}