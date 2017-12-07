import React from 'react';
import { render } from 'react-dom';
// import { Chart } from 'react-google-charts';
import {LineChart} from 'react-easy-chart';
import axios from 'axios';
// import RTChart from 'react-rt-chart';
// let data = require('../../../test.json')["activities-heart-intraday"]["dataset"];
let data = require('../../../heartrate.json')["data"];

 
export default class HeartRatePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: [], current: 0};
  }
  componentDidMount() {
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
      array.push({"x": data[i].x, "y": data[i].y})
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
      yDomainRange={[0, 120]}
      axes
      dataPoints
      width={750}
      height={500}
      grid
      axisLabels={{x: 'Reading', y: 'Heart Rate (BPM)'}}
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
    axios.get('/api/notify')
    .then(success =>{
        console.log("notified");
        });
  }

}