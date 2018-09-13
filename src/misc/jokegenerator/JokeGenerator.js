import React, { Component } from 'react';

export const API_URL = 'http://api.icndb.com/jokes/random';
export const DEFAULT_MSG = 'Click the button to generate a random joke!';
export const ERROR_MSG = 'Something went wrong ...!';
export const LOADING_TXT = 'Loading...';

export default class JokeGenerator extends Component {
  state = {
    joke: null,
    loading: false,
    error: null
  };

  onClick = async () => {
    try {
      this.setState({ error: null, loading: true });
      let response = await fetch(API_URL);
      if (response.ok) {
        let data = await response.json();
        this.setState({ joke: data.value.joke, loading: false });
      } else {
        throw new Error(ERROR_MSG);
      }
    } catch (error) {
      this.setState({ joke: null, error: ERROR_MSG, loading: false });
    }
  };

  renderContentBody = () => {
    const { error, joke, loading } = this.state;
    if (error) return <div>{error}</div>;
    if (loading) return <div>{LOADING_TXT}</div>;
    if (joke) return <div>{joke}</div>;
    return <div data-testid="default-msg">{DEFAULT_MSG}</div>;
  };

  render() {
    return (
      <div>
        <h2>Joke Generator</h2>
        {this.renderContentBody()}
        <br />
        <br />
        <button data-testid="generate-btn" onClick={this.onClick}>
          Generate Joke
        </button>
      </div>
    );
  }
}
