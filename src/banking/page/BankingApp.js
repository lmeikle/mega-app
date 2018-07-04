import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AtmsContainer from '../atms/AtmsContainer';
import BanksContainer from '../banks/BanksContainer';
import logo from './logo.svg';
import './Banking.css';

class BankingApp extends Component {
  render() {
    return (
      <div>
        <div className="banking-topbar">
          <img src={logo} className="banking-topbar-logo" alt="logo" />
        </div>

        <Route path="banking/atms" component={AtmsContainer} />
        <Route path="banking" component={BanksContainer} />
      </div>
    );
  }
}

export default BankingApp;
