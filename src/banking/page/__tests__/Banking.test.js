import React from 'react';
import { shallow } from 'enzyme';
import Banking from '../Banking';

const banking = shallow(<Banking />);

test('renders correctly', () => {
  expect(banking).toMatchSnapshot();
});
