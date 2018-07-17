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
  totalResults: 5,
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

const readyStateNoMoreResults = {
  ...readyState,
  totalResults: 2
};

const errorState = {
  error: 'There was an error'
};

describe('NewsContainer', () => {
  describe('initial', () => {
    let newsContainer;
    beforeEach(() => {
      newsContainer = shallow(<NewsContainer />);
    });

    test('renders correctly', () => {
      expect(newsContainer).toMatchSnapshot();
    });

    test('initializes the `state` correctly', () => {
      expect(newsContainer.state()).toEqual(initialState);
    });

    test('contains no NewsHeadlineComponents', () => {
      expect(newsContainer.find('NewsHeadlineComponent').length).toBe(0);
    });

    test('contains no show more button', () => {
      expect(newsContainer.find('.news-show-more-button').length).toBe(0);
    });
  });

  describe('with data', () => {
    let newsContainer;
    beforeEach(() => {
      newsContainer = shallow(<NewsContainer />);
      newsContainer.setState(readyState);
    });

    test('renders a list of NewsHeadlineComponents', () => {
      expect(newsContainer.find('NewsHeadlineComponent').length).toBe(2);
    });

    test('renders the show more button when there are more results', () => {
      expect(newsContainer.find('.news-show-more-button').length).toBe(1);
    });

    test('does not render the show more button when there are more results', () => {
      newsContainer.setState(readyStateNoMoreResults);
      expect(newsContainer.find('.news-show-more-button').length).toBe(0);
    });

    /**test('should call showMore when show more button is clicked', () => {
      const showMoreSpy = jest.spyOn(NewsContainer.prototype, 'showMore');

      const newsContainer = mount(<NewsContainer />);
      newsContainer.setState(readyState);

      newsContainer.find('.news-show-more-button').simulate('click');
      expect(showMoreSpy).toHaveBeenCalledTimes(1);
    });*/
  });

  describe('handles errors', () => {
    let newsContainer;
    beforeEach(() => {
      newsContainer = shallow(<NewsContainer />);
      newsContainer.setState(errorState);
    });

    test('displays an error message', () => {
      expect(newsContainer.find('.errorMessage').exists()).toBe(true);
    });
  });
});
