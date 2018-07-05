import React from 'react';
import { shallow } from 'enzyme';
import BankingApp from '../BankingApp';

const bankingApp = shallow(<BankingApp />);

test('renders correctly', () => {
  expect(bankingApp).toMatchSnapshot();
});
