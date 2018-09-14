import React from 'react';
import logo from './loadingSpinner.svg';
import './Loading.css';

function render(props) {
  if (props.error) {
    // When the loader has errored
    console.error(props.error);
    return <div>{props.error.stack}</div>;
  } else if (props.timedOut) {
    // When the loader has taken longer than the timeout
    return (
      <div>
        Taking a long time... <button onClick={props.retry}>Retry</button>
      </div>
    );
  } else if (props.pastDelay) {
    // When the loader has taken longer than the delay
    return <div>Loading...</div>;
  } else {
    // When the loader has just started
    return (
      <div>
        <img src={logo} className="loading-spinner" alt="logo" />
      </div>
    );
  }
}

/**
 * Simple stateless component to render a loading spinner
 */
const LoadingComponentV2 = props => render(props);

LoadingComponentV2.displayName = 'LoadingComponentV2';

export default LoadingComponentV2;
