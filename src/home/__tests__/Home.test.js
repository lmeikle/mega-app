import React from 'react';
import { shallow } from 'enzyme';
import Home from '../Home';

const home = shallow(<Home />);

test('renders correctly', () => {
  expect(home).toMatchSnapshot();
});
