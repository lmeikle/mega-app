import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/globalStyle';
import HomeTile from '../HomeTile';

let props = {
  path: '/banking',
  name: 'Banking',
  className: 'banking'
};

describe('HomeTile', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <HomeTile {...props} />
        </MemoryRouter>
      </ThemeProvider>
    );
  });

  test('renders correctly', () => {
    let homeTileWrapper = wrapper.find('HomeTile__HomeTileWrapper div');
    let homeTileWrapperJson = toJson(homeTileWrapper);

    expect(homeTileWrapperJson).toMatchSnapshot();
  });

  test('uses the global theme correctly', () => {
    let homeTileWrapper = wrapper.find('HomeTile__HomeTileWrapper div');

    expect(homeTileWrapper).toHaveStyleRule('border', `2px solid ${theme.primary}`);
  });
});
