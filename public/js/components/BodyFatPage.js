import React from 'react';
import { render } from 'react-dom';
// import { Chart } from 'react-google-charts';
import {LineChart} from 'react-easy-chart';
import axios from 'axios';
import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';
// import RTChart from 'react-rt-chart';
// let data = require('../../../test.json')["activities-heart-intraday"]["dataset"];
let week = require('../../../json/bodyfat/bodyfat-week.json');
let month = require('../../../json/bodyfat/bodyfat-month.json');
let year = require('../../../json/bodyfat/bodyfat-year.json');
let users = require('../../../json/users.json');
 
export default class BodyFatPage extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      user: {},
      week: week,
      month: month,
      year: year, 
      current: 12.6,
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
        this.setState({user: user[0], current: user[0]["bodyfat"]});
    }
  render() {
    var stuff = this.state.data;
    var tooltip = null;
    if(this.state.showToolTip) {
      tooltip = this.selected();
    }
    return (
      <div>
        <h1>{this.state.user.firstName}'s Current Body Fat Percentage: {this.state.current}</h1>;
        {tooltip}
        <link href="../../../css/mui.min.css" rel="stylesheet" type="text/css" media="screen" />
        <Tabs justified={true} onChange={this.onChange}>
          <Tab value="Past Week" label="Past Week">
            <LineChart
              xType={'text'}
              yDomainRange={[0, 100]}
              axes
              dataPoints
              mouseOverHandler={this.mouseOverHandler}
              width={750}
              height={500}
              grid
              axisLabels={{x: 'Reading', y: 'Body Fat Percentage'}}
            data={[this.state.week]}/>
          </Tab>
          <Tab value="Past Month" label="Past Month">
            <LineChart
              xType={'text'}
              yDomainRange={[0, 100]}
              axes
              dataPoints
              mouseOverHandler={this.mouseOverHandler}
              width={750}
              height={500}
              grid
              axisLabels={{x: 'Reading', y: 'Average Body Fat Percentage'}}
            data={[this.state.month]}/>
          </Tab>
          <Tab value="Past Year" label="Past Year">
            <LineChart
              xType={'text'}
              yDomainRange={[0, 100]}
              axes
              dataPoints
              mouseOverHandler={this.mouseOverHandler}
              width={750}
              height={500}
              grid
              axisLabels={{x: 'Reading', y: 'Average Body Fat Percentage'}}
            data={[this.state.year]}/>
          </Tab>
        </Tabs> 
      </div>
    );
  }
  selected(){
    return (<h1>{this.state.user.firstName}'s Body Fat Percentage at {this.state.x} is {this.state.y}</h1>);
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