import React from 'react';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';
import { Icon } from 'semantic-ui-react';
import logo from './icon.svg';
import './Banks.css';

/**
 * Stateless component which renders a single Bank component.
 * Clicking on it will show a list of closest ATM's for the selected bank.
 */
const BanksComponent = ({ name, url }) => (
  <Link to={{ pathname: '/banking/atms', state: { name, url } }}>
    <div className="banks-item">
      <img src={logo} className="banks-logo" alt="logo" />
      <div className="banks-name">{name}</div>
      <Icon name="angle right" color="grey" size="large" className="banks-arrow" />
    </div>
  </Link>
);

BanksComponent.propTypes = {
  name: string.isRequired,
  url: string.isRequired
};

BanksComponent.defaultProps = {};

export default BanksComponent;
