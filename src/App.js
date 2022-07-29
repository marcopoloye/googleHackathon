import React, { Component } from 'react';
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Calendar from './components/Calendar/Calendar';
import Header from './components/Header/Header';
import Appointment from './components/Appointment/Appointment';
import GoogleSearch from './pages/GoogleSearch/GoogleSearch';

class App extends Component {
  render() {
    return (
      <Router className="App">
      {/* <Header /> */}
        <Switch>
          <Route path="/calendar" component={Calendar}/>
          <Route path= '/' exact='/' component= {GoogleSearch} />
          <Route path= '/health/appointment' component= {Appointment}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
