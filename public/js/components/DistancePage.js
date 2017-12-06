import React from 'react';
import { render } from 'react-dom';
// import { Chart } from 'react-google-charts';
import {LineChart} from 'react-easy-chart';
// import RTChart from 'react-rt-chart';
let data = require('../../../test.json')["activities-heart-intraday"]["dataset"];

 
export default class HeartRatePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [], 
      componentWidth: 300,
      current: 0
    };

    this.handleResize = this.handleResize.bind(this);
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

    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  handleResize() {
    this.setState({
      windowWidth: window.innerWidth - 100,
      componentWidth: this.myInput.offsetWidth
    });
  }

  render() {
    var stuff = this.state.data;
    return (
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-lg-15" ref="block" >
            <div class="block" ref={input => {this.myInput = input}}>
              <btitle>Distance</btitle>
              <LineChart
                axes
                width={this.state.componentWidth}
                height={(this.state.componentWidth / 3)}
                axisLabels={{x: 'Reading', y: 'Distance Travelled'}}
                data={[this.state.data]}
              />
            </div>
          </div>
        </div>
      </div> 
    );
  }

}