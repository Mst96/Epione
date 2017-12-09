import React from 'react';
import { render } from 'react-dom';
// import { Chart } from 'react-google-charts';
import {LineChart} from 'react-easy-chart';
import axios from 'axios';
// import RTChart from 'react-rt-chart';
// let data = require('../../../test.json')["activities-heart-intraday"]["dataset"];
let data = require('../../../json/heartrate/heartrate-realtime.json');

 
export default class HeartRatePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: [],
      user: "", 
      current: 0,
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
    var d = new Date();
    for (var i = 0; i <= 5; i++) {
      var h = this.addZero(d.getUTCHours());
      var m = this.addZero(d.getUTCMinutes() + i);
      rate = Math.floor((Math.random() * 20) + 55);
      array.push({"x": h + ":" + m, "y": rate});
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
      if(data[i].y > 120) this.notify(this.state.user + "Has a Dangerously High Heart Rate");
      if(data[i].y < 50) this.notify(this.state.user + "Has a Dangerously Low Heart Rate");
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
      <h1>Current Heart Rate: {this.state.current}</h1>;
      // {tooltip}

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
      axisLabels={{x: 'Reading', y: 'Heart Rate (BPM)'}}
    data={[this.state.data]}/>
            </div>
    );
  }
  selected(){
    console.log("SELECTED");
    return (<h1>The x value is {this.state.x} and the y value is {this.state.y}</h1>);
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
    console.log(e.screenX)
    this.setState({
      showToolTip: true,
      top: `${e.screenY - 10}px`,
      left: `${e.screenX + 10}px`,
      y: d.y,
      x: d.x});
  }

  mouseMoveHandler = (e) => {
    // if (this.state.showToolTip) {
    //   this.setState({top: `${100}px`, left: `${100}px`});
    // }
  }

  // mouseOutHandler = () => {
  //   this.setState({showToolTip: false});
  // }


  createTooltip = () => {
    console.log(this.state)
    if (this.state.showToolTip) {
      return (
      <div>At {this.state.x}, the heart rate was {this.state.y}</div>
      );
    }
    return false;
  }


  notify(message){
    axios.post('/api/notify', {message: message})
    .then(success =>{
        console.log(success);
        });
  }

}