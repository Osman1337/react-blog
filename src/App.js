import React, { Component } from "react";

import {BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from "./container/Home";
import PostDetails from "./container/PostDetails";
import Login from "./container/Login";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
        <Router>
            <Navbar/>
            <div className='container'>
                
    <Switch>
        <Route exact component={Home} path="/" />
        <Route exact component={PostDetails} path="/details" />
        <Route exact component={Login} path="/login"/>
    </Switch>
    </div>
    </Router>
    );
  }
}

export default App;
