import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import BanksComponent from '../BanksComponent';

let testProps = {
  name: 'Barclays Bank',
  url: 'https://www.example.com'
};

const linkToProps = { pathname: '/banking/atms', state: testProps };

describe('BanksComponent', () => {
  test('renders correctly', () => {
    const banksComponent = shallow(<BanksComponent {...testProps} />);
    expect(banksComponent).toMatchSnapshot();
  });

  test('includes link to atms page', () => {
    const wrapper = mount(
      <MemoryRouter>
        <BanksComponent {...testProps} />
      </MemoryRouter>
    );

    expect(wrapper.find('Link').props().to).toEqual(linkToProps);
  });
});
