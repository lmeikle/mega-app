import React from 'react';
import { mount, shallow } from 'enzyme';
import NewsContainer from '../NewsContainer';
import App from '../../app/App';

const initialState = {
  totalResults: 0,
  headlines: [],
  error: null
};

const readyState = {
  totalResults: 2,
  headlines: [
    {
      title: 'Putin ready to meet Trump over arms race concerns',
      date: '10/06/2018',
      source: 'CNN',
      url: 'https://www.cnn.com/2018/06/10/politics/putin-trump-us-russia-arms-intl/index.html'
    },
    {
      title: 'Leave.EU downplayed Russian links',
      date: '10/06/2018',
      source: 'Bbc.com',
      url: 'https://www.bbc.com/news/uk-politics-44428115'
    }
  ],
  error: null
};

const errorState = {
  error: 'There was an error'
};

const newsContainer = shallow(<NewsContainer />);

describe('NewsContainer', () => {
  test('renders correctly', () => {
    expect(newsContainer).toMatchSnapshot();
  });

  test('initializes the `state` correctly', () => {
    expect(newsContainer.state()).toEqual(initialState);
  });

  test('renders a list of NewsHeadlineComponents', () => {
    newsContainer.setState(readyState);
    expect(newsContainer.find('NewsHeadlineComponent').length).toBe(2);
  });

  test('displays an error message', () => {
    newsContainer.setState(errorState);
    expect(newsContainer.find('.errorMessage').exists()).toBe(true);
  });
});
