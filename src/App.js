import React, { Component } from "react";

import Details from "../src/js/components/details";

import Post from "../src/js/components/post";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const App = () => (
  <>
    <Router>
      <Switch>
        <Route exact path="/" component={Post} />
        <Route path="/details/:id" render={props => <Details {...props} />} />
      </Switch>
    </Router>
  </>
);

export default App;
