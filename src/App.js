import React, { Component } from 'react';

import './App.scss';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Calendar from './components/Calendar/Calendar';
import Footer from './components/Footer/Footer';
import Appointment from './components/Appointment/Appointment';
import HomePage from './pages/HomePage/HomePage';

class App extends Component {
  render() {
    return (
      <Router className="App">
        <Switch>
          <Route path= '/calendar' component={Calendar} />
          <Route path= '/' exact component= {HomePage} />
          <Route path= '/appointment' component= {Appointment} />
        </Switch>
        <Footer/>
      </Router>
    );
  }
}


export default App;