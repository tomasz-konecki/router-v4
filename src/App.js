import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import DoMore from "./DoMore";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/domore" component={DoMore} />
        </div>
      </Router>
    );
  }
}

export default App;
