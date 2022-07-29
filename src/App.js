import React, { Component } from 'react';
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Calendar from './components/Calendar/Calendar';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <Router className="App">
      <Header />
        <Switch>
          <Route path="/calendar" component={Calendar}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
