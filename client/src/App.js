import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Navbar from "./components/layout/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}
