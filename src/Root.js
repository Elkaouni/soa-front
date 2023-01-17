import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import Home from "./Home";

function Root() {
  return (
    <Router>
      <Route path="/" exact component={App} />
      <Route path="/home" component={Home} />
    </Router>
  );
}

export default Root;
