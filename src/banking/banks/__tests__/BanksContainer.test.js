import React from 'react';
import { mount, shallow } from 'enzyme';
import { BanksContainer } from '../BanksContainer';

const initialProps = {
  banksWithAtmAPI: [],
  isFetching: true,
  dispatch: jest.fn()
};

const readyProps = {
  ...initialProps,
  banksWithAtmAPI: [
    {
      name: 'Barclays Bank',
      url: 'https://www.example.com'
    }
  ],
  isFetching: false
};

describe('BanksContainer', () => {
  describe('initial', () => {
    let banksContainer;
    beforeEach(() => {
      banksContainer = shallow(<BanksContainer {...initialProps} />);
    });

    test('renders correctly', () => {
      expect(banksContainer).toMatchSnapshot();
    });

    test('renders the loading component when fetching', () => {
      expect(banksContainer.find('LoadingComponent').exists()).toBe(true);
      expect(banksContainer.find('BanksComponent').exists()).toBe(false);
    });
  });

  describe('with data', () => {
    let banksContainer;
    beforeEach(() => {
      banksContainer = shallow(<BanksContainer {...readyProps} />);
    });

    test('renders a list of BanksComponents when has data', () => {
      expect(banksContainer.find('LoadingComponent').exists()).toBe(false);
      expect(banksContainer.find('BanksComponent').exists()).toBe(true);
    });
  });
});
