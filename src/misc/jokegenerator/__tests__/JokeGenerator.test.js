import React from 'react';
import { render, wait, waitForElement, fireEvent } from 'react-testing-library';
import JokeGenerator, { DEFAULT_MSG, ERROR_MSG, LOADING_TXT } from '../JokeGenerator';

let mockData = {
  type: 'success',
  value: {
    id: 298,
    joke:
      'MacGyver immediately tried to make a bomb out of some Q-Tips and Gatorade, but Chuck Norris roundhouse-kicked him in the solar plexus. MacGyver promptly threw up his own heart.',
    categories: []
  }
};

/*
Because of the way we wrote our tests, we can utilize them as e2e tests without adding a single line of code! 
All we need to do is to remove all fetch mocks and run the tests again! 
They will now use a real external API. Cool, isn’t it? :)
*/
describe('JokeGenerator', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('a default message is displayed before we have fetched any jokes', async () => {
    let { getByTestId } = render(<JokeGenerator />);

    expect(getByTestId('default-msg')).toHaveTextContent(DEFAULT_MSG);
  });

  test('clicking the generate button fetches a new joke', async () => {
    fetch.mockResponseOnce(JSON.stringify(mockData));

    let { getByText, getByTestId, queryByText } = render(<JokeGenerator />);

    let generateBtn = await waitForElement(() => getByTestId('generate-btn'));
    fireEvent.click(generateBtn);

    // a loading message is displayed whilst we fetch a joke
    expect(getByText(LOADING_TXT)).toBeInTheDocument();

    // Let's wait until our mocked `get` request promise resolves and the component calls setState and re-renders.
    await wait(() => expect(queryByText(mockData.value.joke)).toBeInTheDocument());
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(queryByText(LOADING_TXT)).not.toBeInTheDocument();
  });

  test('an error message is displayed if something goes wrong', async () => {
    fetch.mockReject('foo');

    let { getByTestId, queryByText } = render(<JokeGenerator />);

    let generateBtn = await waitForElement(() => getByTestId('generate-btn'));
    fireEvent.click(generateBtn);

    // Let's wait until our mocked `get` request promise resolves and the component calls setState and re-renders.
    let errorNode = await waitForElement(() => queryByText(ERROR_MSG));
    expect(errorNode).toBeInTheDocument();
  });
});
