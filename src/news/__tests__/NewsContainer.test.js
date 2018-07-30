import React from 'react';
import { mount, shallow } from 'enzyme';
import NewsContainer from '../NewsContainer';
import App from '../../app/App';
import mockResponse from './mockResponse.json';
import mockResponse2 from './mockResponse2.json';

const initialState = {
  totalResults: 0,
  headlines: [],
  error: null
};

const readyState = {
  totalResults: 20,
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

    test('show the LoadingComponent', () => {
      expect(newsContainer.find('LoadingComponent').length).toBe(1);
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

      fetch.resetMocks();
    });

    test('renders a list of NewsHeadlineComponents', () => {
      expect(newsContainer.find('NewsHeadlineComponent').length).toBe(2);
    });

    test('renders the show more button when there are more results', () => {
      expect(newsContainer.find('.news-show-more-button').length).toBe(1);
    });

    test('does not render the show more button when there are no more results', () => {
      newsContainer.setState(readyStateNoMoreResults);
      expect(newsContainer.find('.news-show-more-button').length).toBe(0);
    });

    test('mounting fetches and renders results', done => {
      fetch.mockResponseOnce(JSON.stringify(mockResponse));
      const newsContainer = mount(<NewsContainer />);

      expect(fetch.mock.calls.length).toEqual(1);

      setImmediate(() => {
        newsContainer.update();
        expect(newsContainer.find('NewsHeadlineComponent').length).toBe(18);
        done();
      });
    });

    test('clicking showMore fetches and renders more results', done => {
      fetch.mockResponseOnce(JSON.stringify(mockResponse));
      const newsContainer = mount(<NewsContainer />);

      setImmediate(() => {
        newsContainer.update();
        fetch.mockResponseOnce(JSON.stringify(mockResponse2));
        newsContainer.find('.news-show-more-button').simulate('click');

        expect(fetch.mock.calls.length).toEqual(2);

        setImmediate(() => {
          newsContainer.update();
          expect(newsContainer.find('NewsHeadlineComponent').length).toBe(20);
          done();
        });
      });
    });
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
