import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { action } from '@storybook/addon-actions';
import AtmsComponent from '../src/banking/atms/AtmsComponent';
import BanksComponent from '../src/banking/banks/BanksComponent';
import '../src/index.css';
import '../src/app/App.css';

storiesOf('BanksComponent', module)
  .addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>)
  .add('with text', () => <BanksComponent name="Barcalys" url="http://www.google.com" />);

storiesOf('AtmsComponent', module)
  .add('default', () => (
    <AtmsComponent
      name="Barcalys"
      countryCode="UK"
      address="10 Jamestown Road, Camden. NW1"
      distance={0.5}
      numOfAtms="3"
      coords={{ Latitude: 0.123, Longitude: '0.456' }}
    />
  ))
  .add('with distance to round', () => (
    <AtmsComponent
      name="Barcalys"
      countryCode="UK"
      address="10 Jamestown Road, Camden. NW1"
      distance={0.5678}
      numOfAtms="3"
      coords={{ Latitude: 0.123, Longitude: '0.456' }}
    />
  ));
