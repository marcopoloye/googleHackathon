import React, { Component } from 'react';

import './App.scss';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Calendar from './components/Calendar/Calendar';
import Footer from './components/Footer/Footer';
import Appointment from './components/Appointment/Appointment';
import GoogleSearch from './pages/GoogleSearch/GoogleSearch';
import HomePage from './pages/HomePage/HomePage';

class App extends Component {
  render() {
    return (
      <Router className="App">
        <Switch>
          <Route path= '/health' exact component= {HomePage} />
          <Route path= '/health/calendar' component={Calendar} />
          <Route path= '/' exact component= {GoogleSearch} />
          <Route path= '/health/appointment' component= {Appointment} />
        </Switch>
        <Footer/>
      </Router>
    );
  }
}


export default App;