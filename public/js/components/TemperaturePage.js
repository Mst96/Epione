import React from 'react';
import { render } from 'react-dom';
// import { Chart } from 'react-google-charts';
import {LineChart} from 'react-easy-chart';
import axios from 'axios';
import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';
// import RTChart from 'react-rt-chart';
// let data = require('../../../test.json')["activities-heart-intraday"]["dataset"];
let data = require('../../../json/temperature/temperature-realtime.json');
let day = require('../../../json/temperature/temperature-day.json');
let week = require('../../../json/temperature/temperature-week.json');
let month = require('../../../json/temperature/temperature-month.json');
let year = require('../../../json/temperature/temperature-year.json');
let users = require('../../../json/users.json');

 
export default class TemperaturePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: [],
      user: {},
      day: day,
      week: week,
      month: month,
      year: year, 
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
    // var d = new Date();
    for (var i = 0; i <= 5; i++) {
      // var h = this.addZero(d.getUTCHours());
      // var m = this.addZero(d.getUTCMinutes() + i);
      rate = Math.floor((Math.random() * 0.6) + 36.8);
      array.push({"x": i, "y": rate});
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
      // if(data[i].y > 120) this.notify(this.state.user + "Has a Dangerously High Temperature");
      // if(data[i].y < 50) this.notify(this.state.user + "Has a Dangerously Low Temperature");
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
      <h1>{this.state.user.firstName}s Current Temperature: {this.state.current}</h1>;
      {tooltip}
      <button onClick={() => {this.notify(this.state.user.firstName + " has a Dangerously HighTemperature")}}>Test Notification</button>
      <link href="../../../css/mui.min.css" rel="stylesheet" type="text/css" media="screen" />
      <Tabs justified={true} onChange={this.onChange}>
        <Tab value="Realtime" label="Realtime">
          <LineChart
            xType={'text'}
            yDomainRange={[35, 39]}
            axes
            dataPoints
            mouseOverHandler={this.mouseOverHandler}
            mouseOutHandler={this.mouseOutHandler}
            width={750}
            height={500}
            grid
            axisLabels={{x: 'Reading', y: 'Temperature (Degrees Celcius)'}}
          data={[this.state.data]}/>
        </Tab>
        <Tab value="Past Day" label="Past Day">
          <LineChart
            xType={'text'}
            yDomainRange={[35, 39]}
            axes
            dataPoints
            mouseOverHandler={this.mouseOverHandler}
            mouseOutHandler={this.mouseOutHandler}
            width={750}
            height={500}
            grid
            axisLabels={{x: 'Reading', y: 'Temperature (Degrees Celcius)'}}
          data={[this.state.day]}/>
        </Tab>
        <Tab value="Past Week" label="Past Week">
          <LineChart
            xType={'text'}
            yDomainRange={[35, 39]}
            axes
            dataPoints
            mouseOverHandler={this.mouseOverHandler}
            mouseOutHandler={this.mouseOutHandler}
            width={750}
            height={500}
            grid
            axisLabels={{x: 'Reading', y: 'Temperature (Degrees Celcius)'}}
          data={[this.state.week]}/>
        </Tab>
        <Tab value="Past Month" label="Past Month">
          <LineChart
            xType={'text'}
            yDomainRange={[35, 39]}
            axes
            dataPoints
            mouseOverHandler={this.mouseOverHandler}
            mouseOutHandler={this.mouseOutHandler}
            width={750}
            height={500}
            grid
            axisLabels={{x: 'Reading', y: 'Temperature (Degrees Celcius)'}}
          data={[this.state.month]}/>
        </Tab>
        <Tab value="Past Year" label="Past Year">
          <LineChart
            xType={'text'}
            yDomainRange={[35, 39]}
            axes
            dataPoints
            mouseOverHandler={this.mouseOverHandler}
            mouseOutHandler={this.mouseOutHandler}
            width={750}
            height={500}
            grid
            axisLabels={{x: 'Reading', y: 'Temperature (Degrees Celcius)'}}
          data={[this.state.year]}/>
        </Tab>
      </Tabs> 

            </div>
    );
  }
  selected(){
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



  notify(message){
    console.log(message);
    axios.post('/api/notify', {message: message})
    .then(success =>{
        console.log(success);
        });
  }

}