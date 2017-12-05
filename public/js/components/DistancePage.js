import React from 'react';
import { render } from 'react-dom';
// import { Chart } from 'react-google-charts';
import {LineChart} from 'react-easy-chart';
// import RTChart from 'react-rt-chart';
let data = require('../../../test.json')["activities-heart-intraday"]["dataset"];

 
export default class HeartRatePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: [], current: 0};
  }
  componentDidMount() {
    var rate;
    var array = [];
    for (var i = 0; i <= 5; i++) {
      rate = Math.floor((Math.random() * 46) + 55);
      array.push({"x": i, "y": rate});
    };
    this.setState({ data: array });
    setInterval(() => {
    var newrate = Math.floor((Math.random() * 46) + 55);
    array.push({"x": i, "y": newrate});
    this.setState({ data: array });
    i++;
  }, 3000);
  }
  render() {
    var stuff = this.state.data;
    return (
      <div>
      <LineChart
      axes
      width={500}
      height={500}
      axisLabels={{x: 'Reading', y: 'Distance Travelled'}}
    data={[this.state.data]}/>
            </div>
    );
  }

}