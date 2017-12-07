import React from 'react';
import { render } from 'react-dom';
// import { Chart } from 'react-google-charts';
import {LineChart} from 'react-easy-chart';
// import RTChart from 'react-rt-chart';
let data = require('../../../json/bloodpressure.json')["data"];

 
export default class HeartRatePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: [], current: 0};
  }
  componentDidMount() {
    var rate;
    var array = [];
    for (var i = 0; i <= 5; i++) {
      rate = Math.floor((Math.random() * 30) + 90);
      array.push({"x": i, "y": rate});
    };
    this.setState({ data: array });
    var i = 5;
    setInterval(() => {
      array.push({"x": data[i].x, "y": data[i].y})
      this.setState({ data: array });
      i++;
  }, 3000);
  }
  render() {
    var stuff = this.state.data;
    return (
      <div>
      <LineChart
      yDomainRange={[0, 200]}
      axes
      width={500}
      height={500}
      axisLabels={{x: 'Reading', y: 'Blood Pressure'}}
    data={[this.state.data]}/>
            </div>
    );
  }

}