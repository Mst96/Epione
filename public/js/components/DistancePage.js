import React from 'react';
import { render } from 'react-dom';
import {LineChart} from 'react-easy-chart';
import {BarChart} from 'react-easy-chart';
import axios from 'axios';
import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';
// import RTChart from 'react-rt-chart';
// let data = require('../../../test.json')["activities-heart-intraday"]["dataset"];
import { timeParse as parse } from 'd3-time-format';

let data = require('../../../json_files/distance/distance.json')["distance"]["dataset"];
let users = require('../../../json/users.json');

let dataDay = require('../../../json_files/distance/distanceData.json')["dataset"]["distanceDay"];
let dataWeek = require('../../../json_files/distance/distanceData.json')["dataset"]["distanceWeek"];
let dataMonth = require('../../../json_files/distance/distanceData.json')["dataset"]["distanceMonth"];
let dataYear = require('../../../json_files/distance/distanceData.json')["dataset"]["distanceYear"];


 
export default class DistancePage extends React.Component {
  constructor(props) {
    super(props);

    var array = [];
    for( var i = 0; i < data.length; i++ ){
      array.push({"x": data[i].time, "y": data[i].distance})
    };

    this.state = {
      data: array,
      dataDay: dataDay,
      dataWeek: dataWeek, 
      dataMonth: dataMonth, 
      dataYear: dataYear, 
      componentWidth: 300,
      current: 0,
      showToolTip: false,
      top: 0,
      left: 0,
      x: 0,
      y: 0,
      user: {}
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
          <div class="col-sm-12 col-lg-15" ref="block" >
            <div class="block" ref={input => {this.myInput = input}}>
              <btitle>Distance Travelled</btitle>
              <link href="../../../css/mui.min.css" rel="stylesheet" type="text/css" media="screen" />
              <Tabs justified={true} onChange={this.onChange}>
                <Tab value="Past Day" label="Past Day">
                  <LineChart
                    axes
                    grid
                    dataPoints
                    datePattern={'%H:%M'}
                    margin={{ top: 50, right: 0, bottom: 50, left: 80 }}
                    width = {this.state.componentWidth - 100}
                    height={this.state.componentWidth / 2}
                    mouseOverHandler={this.mouseOverHandler}
                    lineColors={['#5DADE2']}
                    axisLabels={{x: 'Time', y: 'Distance Travelled (Meters)'}}
                    xType={'time'}
                    data={[this.state.data]}
                  />
                </Tab>
                <Tab value="Past Week" label="Past Week">
                  <BarChart
                    axes
                    colorBars
                    barWidth = {15}
                    margin={{ top: 50, right: 0, bottom: 50, left: 80 }}
                    width = {this.state.componentWidth - 80}
                    height = {this.state.componentWidth / 2}
                    axisLabels={{x: 'Day', y: 'Distance Travelled (Meters)'}}
                    mouseOverHandler={this.mouseOverHandler}
                    data={this.state.dataWeek}/>
                </Tab>
                <Tab value="Past Month" label="Past Month">
                  <BarChart
                    axes
                    colorBars
                    barWidth = {15}
                    margin={{ top: 50, right: 0, bottom: 50, left: 80 }}
                    width = {this.state.componentWidth - 80}
                    height = {this.state.componentWidth / 2}
                    axisLabels={{x: 'Day', y: 'Distance Travelled (Meters)'}}
                    mouseOverHandler={this.mouseOverHandler}
                    data={this.state.dataMonth}/>
                </Tab>
                <Tab value="Past Year" label="Past Year">
                  <BarChart
                    axes
                    colorBars
                    barWidth = {15}
                    margin={{ top: 50, right: 0, bottom: 50, left: 80 }}
                    width = {this.state.componentWidth - 80}
                    height = {this.state.componentWidth / 2}
                    axisLabels={{x: 'Month', y: 'Distance Travelled (Meters)'}}
                    mouseOverHandler={this.mouseOverHandler}
                    data={this.state.dataYear}/>
                </Tab>
              </Tabs>
              {tooltip}
            </div>
          </div>
        </div>
        
      </div> 
    );
  }
  selected(){
    return (<h1>At {this.state.x}, {this.state.user.firstName} travelled {this.state.y} meters</h1>);
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

  notify(){
    axios.post('/api/notify', {message: "High Heart Rate"})
    .then(success =>{
        console.log(success);
        });
  }

}