import React from "react";
import { IndexLink, Link } from "react-router";
export default class Navigation extends React.Component{
    constructor(){
        super();
        this.state = {
            collapsed: true,
        };
    }
toggleCollapse(){
        const collapsed =!this.state.collapsed;
        this.setState({collapsed});
    }
render(){
        const { location } = this.props;
        const {collapsed } = this.state;
        const homeClass = location.pathname === '/' ? "active" : "";
        const loginClass = location.pathname.match(/^\/login/) ? "active" : "";
        const dashboardClass = location.pathname.match(/^\/dashboard/) ? "active" : "";
        const navClass = collapsed ? "collapse" : "";
    return(
        <div class="navbar navbar-default navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <a href="/" class="navbar-brand">Epione</a>
                </div>
            </div>
        </div>
    );
}
}