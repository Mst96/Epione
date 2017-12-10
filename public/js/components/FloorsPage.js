import React from 'react';
import { render } from 'react-dom';
// import { Chart } from 'react-google-charts';
import {BarChart} from 'react-easy-chart';
import axios from 'axios';
import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';
// import RTChart from 'react-rt-chart';
// let data = require('../../../test.json')["activities-heart-intraday"]["dataset"];
let day = require('../../../json/floors/floors-day.json');
let week = require('../../../json/floors/floors-week.json');
let month = require('../../../json/floors/floors-month.json');
let year = require('../../../json/floors/floors-year.json');
let users = require('../../../json/users.json');
 
export default class FloorPage extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      data:[],
      user: {},
      day: day,
      week: week,
      month: month,
      year: year, 
      current: 7.6,
      showToolTip: false,
      top: 0,
      left: 0,
      x: 0,
      y: 0
    };
  }
  componentDidMount() {
        var param = this.props.params.user;
        var user = users.filter(function(user){
            if(user.firstName === param){
                console.log("YOOO MATCH");
                return user;
            }
        })
        this.setState({user: user[0]});
    }
  render() {
    var stuff = this.state.data;
    var tooltip = null;
    if(this.state.showToolTip) {
      tooltip = this.selected();
    }
    return (
      <div>
        <h1>{this.state.user.firstName} has climbed {this.state.current} floors today</h1>;
        {tooltip}
        <link href="../../../css/mui.min.css" rel="stylesheet" type="text/css" media="screen" />
        <Tabs justified={true} onChange={this.onChange}>
          <Tab value="Past Day" label="Past Day">
          <BarChart
            axes
            colorBars
            barWidth = {15}
            height={500}
            width={500}
            margin={{ top: 50, right: 0, bottom: 50, left: 80 }}
            axisLabels={{x: 'Reading', y: 'Floors'}}
            mouseOverHandler={this.mouseOverHandler}
            data={this.state.day}/>
            </Tab>
            <Tab value="Past Week" label="Past Week">
          <BarChart
            axes
            colorBars
            barWidth = {15}
            height={500}
            width={500}
            margin={{ top: 50, right: 0, bottom: 50, left: 80 }}
            axisLabels={{x: 'Reading', y: 'Floors'}}
            mouseOverHandler={this.mouseOverHandler}
            data={this.state.week}/>
            </Tab>
            <Tab value="Past Month" label="Past Month">
          <BarChart
            axes
            colorBars
            barWidth = {15}
            height={500}
            width={500}
            margin={{ top: 50, right: 0, bottom: 50, left: 80 }}
            axisLabels={{x: 'Reading', y: 'Floors'}}
            mouseOverHandler={this.mouseOverHandler}
            data={this.state.month}/>
            </Tab>
            <Tab value="Past Year" label="Past Year">
          <BarChart
            axes
            colorBars
            barWidth = {15}
            height={500}
            width={500}
            margin={{ top: 50, right: 0, bottom: 50, left: 80 }}
            axisLabels={{x: 'Reading', y: 'Floors'}}
            mouseOverHandler={this.mouseOverHandler}
            data={this.state.year}/>
            </Tab>
        </Tabs>
      </div>
    );
  }
  selected(){
    return (<h1>At {this.state.x}, {this.state.user.firstName} climbed {this.state.y} floors</h1>);
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
}