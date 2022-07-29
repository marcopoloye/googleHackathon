import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Calendar from './Components/Calendar/Calendar';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <Router className="App">
        <Switch>
          <Route path="/calendar" component={Calendar}/>
        </Switch>
      <Header />
      </Router>
    );
  }
}

export default App;
