import React, { Component } from 'react';
import { Route, Switch, RouteComponentProps } from 'react-router-dom';
import AtmsContainer from '../atms/AtmsContainer';
import BanksContainer from '../banks/BanksContainer';
import logo from './logo.svg';
import './Banking.css';

type MatchParams = {};
interface IProps extends RouteComponentProps<MatchParams> {}

class Banking extends Component<IProps, object> {
  render() {
    const { match } = this.props;
    let url = '';
    if (match && match.url) {
      url = match.url;
    }

    return (
      <div className="banking-container">
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
