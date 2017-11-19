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

const app = document.getElementById('app');

ReactDOM.render(
    <Router history = { browserHistory }>
      <Route path = "/" component = { Layout }>
        <IndexRoute component = { Home }></IndexRoute>
        <Route path = "/login" component = { Login }></Route>
        <Route path = "/dashboard" component = { Dashboard }></Route>
        <Route path = "/home" component = { Home }></Route>
        <Route path = "/patients" component = { Patients }></Route>
        <Route path = "/heartrate" component = { HeartRate }></Route>
      </Route>
    </Router>,
    app);