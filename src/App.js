import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Calendar from './components/Calendar/Calendar';
import Header from './components/Header/Header';
import Appointment from './components/Appointment/Appointment';

function App () {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/calendar" component={Calendar}/>
        <Route path="/appointment" component={Appointment}/>
      </Switch>
    </Router>
  );
}


export default App;