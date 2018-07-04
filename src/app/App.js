import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BankingApp from '../banking/page/BankingApp';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path="/banking" component={BankingApp} />
            <Route path="/" component={BankingApp} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
