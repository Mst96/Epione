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
      componentWidth: 300,
      current: 7.6,
      showToolTip: false,
      top: 0,
      left: 0,
      x: 0,
      y: 0
    };

    this.handleResize = this.handleResize.bind(this);
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
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setState({
      windowWidth: window.innerWidth - 100,
      componentWidth: this.myInput.offsetWidth
    });
  }

  render() {
    var stuff = this.state.data;
    var tooltip = null;
    if(this.state.showToolTip) {
      tooltip = this.selected();
    }
    return (
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-lg-12" ref="block">
            <div class="block" ref={input => {this.myInput = input}}>
              <btitle>Floors Climbed</btitle>
        <h1>{this.state.user.firstName} has climbed {this.state.current} floors today</h1>;
        
        <link href="../../../css/mui.min.css" rel="stylesheet" type="text/css" media="screen" />
        <Tabs justified={true} onChange={this.onChange}>
          <Tab value="Past Day" label="Past Day">
          <BarChart
            axes
            colorBars
            barWidth = {15}
            margin={{ top: 50, right: 0, bottom: 50, left: 80 }}
            width = {this.state.componentWidth - 80}
            height = {this.state.componentWidth / 2}
            axisLabels={{x: 'Hour', y: 'Floors Climbed'}}
            mouseOverHandler={this.mouseOverHandler}
            data={this.state.day}/>
            </Tab>
            <Tab value="Past Week" label="Past Week">
          <BarChart
            axes
            colorBars
            barWidth = {15}
            margin={{ top: 50, right: 0, bottom: 50, left: 80 }}
            width = {this.state.componentWidth - 80}
            height = {this.state.componentWidth / 2}
            axisLabels={{x: 'Day', y: 'Floors Climbed'}}
            mouseOverHandler={this.mouseOverHandler}
            data={this.state.week}/>
            </Tab>
            <Tab value="Past Month" label="Past Month">
          <BarChart
            axes
            colorBars
            barWidth = {15}
            margin={{ top: 50, right: 0, bottom: 50, left: 80 }}
            width = {this.state.componentWidth - 80}
            height = {this.state.componentWidth / 2}
            axisLabels={{x: 'Day', y: 'Floors Climbed'}}
            mouseOverHandler={this.mouseOverHandler}
            data={this.state.month}/>
            </Tab>
            <Tab value="Past Year" label="Past Year">
          <BarChart
            axes
            colorBars
            barWidth = {15}
            margin={{ top: 50, right: 0, bottom: 50, left: 80 }}
            width = {this.state.componentWidth - 80}
            height = {this.state.componentWidth / 2}
            axisLabels={{x: 'Month', y: 'Floors Climbed'}}
            mouseOverHandler={this.mouseOverHandler}
            data={this.state.year}/>
            </Tab>
        </Tabs>
            </div>
          </div>
        </div>
        {tooltip}
      </div>
    );
  }
  selected(){
    if( this.state.x == 1 || this.state.x == 21 || this.state.x == 31  )
    {
      return (<h1>On the {this.state.x}st, {this.state.user.firstName} climbed {this.state.y} floors</h1>);
    } else if( this.state.x == 2 || this.state.x == 22 )
    {
      return (<h1>On the {this.state.x}nd, {this.state.user.firstName} climbed {this.state.y} floors</h1>);
    } else if( this.state.x == 3 || this.state.x == 23 )
    {
      return (<h1>On the {this.state.x}rd, {this.state.user.firstName} climbed {this.state.y} floors</h1>);
    } else
    {
      return (<h1>On the {this.state.x}th, {this.state.user.firstName} climbed {this.state.y} floors</h1>);
    }
    
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