import React from 'react';
import { render } from 'react-dom';
// import { Chart } from 'react-google-charts';
import {LineChart} from 'react-easy-chart';
// import RTChart from 'react-rt-chart';
let data = require('../../../test.json')["activities-heart-intraday"]["dataset"];

const mapStateToProps = function(state){
  console.log(state);
  return {
    heartrate: check(state.background.random.value),
  }
}

const check = function(value){
  if (values === null){
    return [60]
  } else {
    return value.values
  }
}
const mapDispatchToProps = function (dispatch) {
}
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
    return (
      <div>
      <LineChart
      axes
      width={500}
      height={500}
      axisLabels={{x: 'Reading', y: 'Heart Rate (BPM)'}}
    data={[this.state.data]}/>
            </div>
    );
  }

}