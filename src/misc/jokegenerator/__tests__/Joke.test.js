import React from 'react';
import { render } from 'react-testing-library';
import Joke from '../Joke';

describe('Joke', () => {
  test('Joke component recieves props and renders it', () => {
    let jokeText = 'Knock Knock';
    let { getByText, getByTestId } = render(<Joke text={jokeText} />);

    expect(getByText(jokeText)).toBeInTheDocument();
    expect(getByTestId('joke-text')).toHaveTextContent(jokeText);
  });
});
