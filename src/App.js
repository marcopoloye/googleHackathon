import React, { Component } from 'react';

import './App.scss';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Calendar from './components/Calendar/Calendar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import Appointment from './components/Appointment/Appointment';


class App extends Component {
  render() {
    return (
      <Router className="App">
      <Header />
      <Navigation/>
        <Switch>
          <Route path="/calendar" component={Calendar}/>
        </Switch>
        <Footer/>
      </Router>
    );
  }
}


export default App;