import React from 'react';
import { render } from 'react-dom';
import {LineChart} from 'react-easy-chart';
import { timeParse as parse } from 'd3-time-format';

let data = require('../../../json_files/distance/distance.json')["distance"]["dataset"];

 
export default class DistancePage extends React.Component {
  constructor(props) {
    super(props);

    var array = [];
    for( var i = 0; i < data.length; i++ ){
      array.push({"x": data[i].time, "y": data[i].distance})
    };

    this.state = {
      data: array, 
      componentWidth: 300,
      current: 0
    };

    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
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
              <btitle>Distance Travelled Yesterday</btitle>
              <LineChart
                axes
                grid
                dataPoints
                datePattern={'%H:%M'}
                margin={{ top: 50, right: 0, bottom: 50, left: 80 }}
                width={this.state.componentWidth - 80}
                height={(this.state.componentWidth / 3) * 2}
                lineColors={['#5DADE2']}
                axisLabels={{x: 'Time', y: 'Distance Travelled (Meters)'}}
                xType={'time'}
                data={[this.state.data]}
              />
            </div>
          </div>
        </div>
      </div> 
    );
  }

}