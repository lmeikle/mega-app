import React, { SFC } from 'react';
import { AtmProps } from './AtmsPropTypes';
import './Atms.css';

/**
 * Stateless component which renders a single ATM component.
 * Clicking on it will launch google maps using the ATM's coordinates
 */
const AtmsComponent: SFC<AtmProps> = ({ name, countryCode, address, coords, distance = 0, numOfAtms }) => {
  const googleMapsUrl = `http://www.google.com/maps/place/${coords.Latitude},${coords.Longitude}`;
  return (
    <a href={googleMapsUrl} target="_blank">
      <div className="atm">
        <div>Bank Name: {name}</div>
        <div>Address: {address}</div>
        <div>Country: {countryCode}</div>
        <div>
          Distance: {distance.toFixed(2)}
          km
        </div>
        <div>Number of ATM's: {numOfAtms}</div>
      </div>
    </a>
  );
};

export default AtmsComponent;
