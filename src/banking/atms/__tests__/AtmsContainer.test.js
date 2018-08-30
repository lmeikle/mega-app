import React from 'react';
import { mount, shallow } from 'enzyme';
import { AtmsContainer } from '../AtmsContainer';

const initialProps = {
  isFetching: true,
  dispatch: jest.fn()
};

const initialState = {
  geolocation: undefined
};

const readyProps = {
  ...initialProps,
  isFetching: false,
  atms: [
    {
      identification: '456',
      name: 'Barclays Bank',
      countryCode: 'UK',
      address: '10 Watford High Street',
      coords: { Latitude: 234, Longitude: 567 },
      distance: 5.23,
      numOfAtms: 1
    },
    {
      identification: '123',
      name: 'Barclays Bank',
      countryCode: 'UK',
      address: '10 Camden High Street',
      coords: { Latitude: 123, Longitude: 456 },
      distance: 1.23,
      numOfAtms: 3
    },
    {
      identification: '789',
      name: 'Barclays Bank',
      countryCode: 'UK',
      address: '10 Chesham High Street',
      coords: { Latitude: 345, Longitude: 567 },
      distance: 10.23,
      numOfAtms: 1
    }
  ],
  name: 'Barclays',
  errorMessagepAtmsR: null
};

const readyState = {
  geolocation: { coords: { latitude: 123, longitude: 456 } }
};

const errorProps = {
  ...initialProps,
  isFetching: false,
  errorMessage: 'There was an error'
};

const errorState = {
  geolocation: { coords: { latitude: 123, longitude: 456 } }
};

describe('AtmsContainer', () => {
  describe('initial', () => {
    let atmsContainer;
    beforeEach(() => {
      atmsContainer = shallow(<AtmsContainer {...initialProps} />);
    });

    test('renders correctly', () => {
      expect(atmsContainer).toMatchSnapshot();
    });

    test('initializes the `state` correctly', () => {
      expect(atmsContainer.state()).toEqual(initialState);
    });

    test('renders the loading component when fetching', () => {
      expect(atmsContainer.find('LoadingComponent').exists()).toBe(true);
    });
  });

  describe('with data', () => {
    let atmsContainer;
    beforeEach(() => {
      atmsContainer = shallow(<AtmsContainer {...readyProps} />);
      atmsContainer.setState(readyState);
    });

    test('sets the `state` correctly', () => {
      expect(atmsContainer.state()).toEqual(readyState);
    });

    test('renders a list of AtmsComponents', () => {
      expect(atmsContainer.find('AtmsComponent').exists()).toBe(true);
    });

    test('given an arrry of atms find the nearest atms', () => {
      expect(AtmsContainer.findNearestATMs(readyState.geolocation, readyProps.atms, 1)[0].address).toBe('10 Camden High Street');
    });
  });

  describe('with error', () => {
    test('displays a error message', () => {
      let atmsContainer = shallow(<AtmsContainer {...errorProps} />);
      atmsContainer.setState(errorState);
      expect(atmsContainer.find('.errorMessage').exists()).toBe(true);
    });
  });
});
