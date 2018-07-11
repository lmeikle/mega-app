import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AtmsContainer from '../atms/AtmsContainer';
import BanksContainer from '../banks/BanksContainer';
import logo from './logo.svg';
import './Banking.css';

class Banking extends Component {
  render() {
    return (
      <div className="banking">
        <div className="banking-topbar">
          <img src={logo} className="banking-topbar-logo" alt="logo" />
        </div>
        <Switch>
          <Route path={`${this.props.match.url}/atms`} component={AtmsContainer} />
          <Route path={`${this.props.match.url}/`} component={BanksContainer} />
        </Switch>
      </div>
    );
  }
}

export default Banking;
