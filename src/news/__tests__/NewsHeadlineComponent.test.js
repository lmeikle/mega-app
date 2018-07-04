import React from 'react';
import { shallow } from 'enzyme';
import NewsHeadlineComponent from '../NewsHeadlineComponent';

let props = {
  title: 'Putin ready to meet Trump over arms race concerns',
  date: '10/06/2018',
  source: 'CNN',
  url: 'https://www.cnn.com/2018/06/10/politics/putin-trump-us-russia-arms-intl/index.html'
};

const newsHeadlineComponent = shallow(<NewsHeadlineComponent {...props} />);

test('renders correctly', () => {
  expect(newsHeadlineComponent).toMatchSnapshot();
});
