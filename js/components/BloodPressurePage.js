import React from 'react';
import { render } from 'react-dom';
// import { Chart } from 'react-google-charts';
import {LineChart} from 'react-easy-chart';
// import RTChart from 'react-rt-chart';
let data = require('../../../test.json')["activities-heart-intraday"]["dataset"];

 
export default class HeartRatePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
  }
  componentDidMount() {
    setInterval(() => {
    var array = [];
    for (var i = 0; i <= this.state.data.length && i<data.length; i++) {
      array.push({"x": i,"y": data[i].value});
    };
    this.setState({ data: array });
  }, 1000);
  }
  render() {
    var stuff = this.state.data;
    console.log(this.state.data);
    return (
      <div>
      <LineChart
      axes
      width={250}
      height={250}
      axisLabels={{x: 'Reading', y: 'Blood Pressure'}}
    data={[this.state.data]}/>
            </div>
    );
  }

}