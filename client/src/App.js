import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//redux
import { Provider } from "react-redux";
import store from "./store";

// components 

import Login from './components/auth/Login'

export default function App() {
  return (
    <Provider>
      <div className="container">
        Welcome to bug hound!
        <Login/>
      </div>  
      
    </Provider>
  );
}
