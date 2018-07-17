import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AtmsContainer from '../atms/AtmsContainer';
import BanksContainer from '../banks/BanksContainer';
import logo from './logo.svg';
import './Banking.css';

class Banking extends Component {
  render() {
    const { match } = this.props;
    let url = '';
    if (match && match.url) {
      url = match.url;
    }

    return (
      <div className="banking">
        <div className="banking-topbar">
          <img src={logo} className="banking-topbar-logo" alt="logo" />
        </div>
        <Switch>
          <Route path={`${url}/atms`} component={AtmsContainer} />
          <Route path={`${url}/`} component={BanksContainer} />
        </Switch>
      </div>
    );
  }
}

export default Banking;
