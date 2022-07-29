import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Appointment from './components/Appointment/Appointment';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path= '/' />
        <Route path= '/appointment' component= {Appointment}/>
      </Switch>
    </Router>
      

  );
}

export default App;
