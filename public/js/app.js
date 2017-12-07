import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Provider } from "react-redux";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Patients from "./components/Patients";
import HeartRate from "./components/HeartRatePage";
import Profile from "./components/Profile";
import Usersettings from "./components/Usersettings";
import Diary from "./components/Diary";
import Addsymptom from "./components/Addsymptom";
import BloodPressurePage from "./components/BloodPressurePage";
import CaloriesPage from "./components/CaloriesPage";
import Goals from "./components/Goals";
import SleepPage from "./components/SleepPage";
import DistancePage from "./components/DistancePage";
import WaterPage from "./components/WaterPage";
import FloorsPage from "./components/FloorsPage";
import Vitals from "./components/Vitals";
import Body from "./components/Body";
import Symptom from "./components/Symptom";
import Activity from "./components/Activity";
import ActivityPage from "./components/ActivityPage";
import EpioneGraph from "./components/EpioneGraph";
import WelcomePage from "./components/WelcomePage";

const app = document.getElementById('app');

ReactDOM.render(
    <Router history = { browserHistory }>
      <Route path = "/" component = { Layout }>
        <IndexRoute component = { Home }></IndexRoute>
        <Route path = "/login" component = { Login }></Route>
        <Route path = "/dashboard" component = { Dashboard }></Route>
        <Route path = "/:user/dashboard" component = { Dashboard }></Route>
        <Route path = "/home" component = { Home }></Route>
        <Route path = "/patients" component = { Patients }></Route>
        <Route path = "/heartrate" component = { HeartRate }></Route>
        <Route path = "/profile" component = { Profile }></Route>
        <Route path = "/settings" component = { Usersettings }></Route>
        <Route path = "/diary" component = { Diary }></Route>
        <Route path = "/addsymptom" component = { Addsymptom }></Route>
        <Route path = "/bloodpressure" component = { BloodPressurePage }></Route>
        <Route path = "/calories" component = { CaloriesPage }></Route>
        <Route path = "/goals" component = { Goals }></Route>
        <Route path = "/sleep" component = { SleepPage }></Route>
        <Route path = "/distance" component = { DistancePage }></Route>
        <Route path = "/water" component = { WaterPage }></Route>
        <Route path = "/floors" component = { FloorsPage }></Route>
        <Route path = "/vitals" component = { Vitals }></Route>
        <Route path = "/body" component = { Body }></Route>
        <Route path = "/symptom" component = { Symptom }></Route>
        <Route path = "/activity" component = { Activity }></Route>
        <Route path = "/activitypage" component = { ActivityPage }></Route>
        <Route path = "/epionegraph" component = { EpioneGraph }></Route>
        <Route path = "/welcome" component = { WelcomePage }></Route>
      </Route>
    </Router>,
    app);