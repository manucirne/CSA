import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from './Home'
import Login from './Login'
import './App.css';

class App extends Component {
  render() {
    return(
      <Router>
        <div className="root">
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/colheita" component={CheckLogIn} />
        </div>
      </Router>  
    )}
}

export default App;
