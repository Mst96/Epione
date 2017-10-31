import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Provider } from "react-redux";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";

const app = document.getElementById('app');

ReactDOM.render(
    <Router history = { browserHistory }>
      <Route path = "/" component = { Layout }>
        <IndexRoute component = { Login }></IndexRoute>
        <Route path = "/login" component = { Login }></Route>
        <Route path = "/dashboard" component = { Dashboard }></Route>
      </Route>
    </Router>,
    app);