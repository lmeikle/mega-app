import React from 'react';
import { render, fireEvent, cleanup, waitForElement, wait } from 'react-testing-library';
import 'jest-dom/extend-expect';
import { shallow } from 'enzyme';
import NewsContainer from '../NewsContainer';
import NewsHeadlineComponent from '../NewsHeadlineComponent';
import mockResponse from './mockResponse.json';
import mockResponse2 from './mockResponse2.json';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('News', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  /**
   * Things I want to test:
   *
   * -shows the LoadingComponent whilst waiting for data
   * -when mounted makes a fetch request and displays the results
   * -displays the show more button when there is more data
   * -does not display the show more button when there is not more data
   * -renders an error message correctly
   *
   */
  test('shows the LoadingComponent whilst waiting for data', () => {
    // can't use reacct-testing-library for this one
    let newsContainer = shallow(<NewsContainer />);
    expect(newsContainer.find('LoadingComponent').length).toBe(1);
    expect(newsContainer.find('NewsHeadlineComponent').length).toBe(0);
    expect(newsContainer.find('.news-show-more-button').length).toBe(0);
  });

  test('when mounted makes a fetch request and displays the results', async () => {
    fetch.mockResponseOnce(JSON.stringify(mockResponse));

    const { getByText, getByTestId, queryByText, queryAllByTestId, container } = render(<NewsContainer />);

    // Let's wait until our mocked `get` request promise resolves and the component calls setState and re-renders.
    await wait(() => expect(queryByText(mockResponse.articles[0].title)).toBeInTheDocument());

    // check the correct number of NewsHeadlineComponent's have rendered
    expect(queryAllByTestId('NewsHeadlineComponent_title')).toHaveLength(mockResponse.articles.length);

    // check fetch calls are correct, these 2 test the same thing
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch).toHaveBeenCalledTimes(1);

    // snapshots work great with regular DOM nodes!
    expect(container.firstChild).toMatchSnapshot();
  });

  test('displays the show more button when there is more data', async () => {
    fetch.mockResponseOnce(JSON.stringify(mockResponse));

    const { getByText, queryByText } = render(<NewsContainer />);

    // Let's wait until our mocked `get` request promise resolves and the component calls setState and re-renders.
    await wait(() => expect(queryByText(mockResponse.articles[0].title)).toBeInTheDocument());

    // check the show more button is visible
    expect(getByText('Show More')).toBeInTheDocument();
  });

  test('does not display the show more button when there is not more data', async () => {
    fetch.mockResponseOnce(JSON.stringify(mockResponse));

    const { getByText, queryByText } = render(<NewsContainer />);

    // Let's wait until our mocked `get` request promise resolves and the component calls setState and re-renders.
    await wait(() => expect(queryByText(mockResponse.articles[0].title)).toBeInTheDocument());

    fetch.mockResponseOnce(JSON.stringify(mockResponse2));
    fireEvent.click(getByText('Show More'));

    // Let's wait until our mocked `get` request promise resolves and the component calls setState and re-renders.
    await wait(() => expect(queryByText(mockResponse2.articles[0].title)).toBeInTheDocument());

    // check the show more button is not visible
    expect(queryByText('Show More')).not.toBeInTheDocument();
  });

  test('renders an error message correctly', async () => {
    const errorMessage = 'foo';
    fetch.mockReject(errorMessage);

    const { getByText, queryByText } = render(<NewsContainer />);

    // Let's wait until our mocked `get` request promise resolves and the component calls setState and re-renders.
    await wait(() => expect(getByText(/Something went wrong .../)).toBeInTheDocument());

    // check the show more button is not visible
    expect(queryByText('Show More')).not.toBeInTheDocument();
  });
});

describe('NewsHeadlineComponent', () => {
  test('renders correctly', () => {
    let props = {
      title: 'Putin ready to meet Trump over arms race concerns',
      date: '10/06/2018',
      source: 'CNN',
      url: 'https://www.cnn.com/2018/06/10/politics/putin-trump-us-russia-arms-intl/index.html'
    };

    const { getByText, getByTestId, container } = render(<NewsHeadlineComponent {...props} />);

    // these 2 test the same thing
    expect(getByTestId('NewsHeadlineComponent_title')).toHaveTextContent(props.title);
    expect(getByText(props.title)).toBeInTheDocument();

    // snapshots work great with regular DOM nodes!
    expect(container.firstChild).toMatchSnapshot();
  });
});
