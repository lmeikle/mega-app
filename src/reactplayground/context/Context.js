import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';

const Context = () => (
  <div className="context">
    <div>Context</div>
    <br />
    {/** pass the value prop all the way to LevelTwo using the Context API */}
    <TestProvider value={{ title: 'pass me from the top level' }}>
      <LevelOne />
    </TestProvider>
  </div>
);

Context.propTypes = {};
Context.defaultProps = {};
export default Context;

const ReactContext = React.createContext();
class TestProvider extends Component {
  render() {
    return <ReactContext.Provider value={this.props.value}>{this.props.children}</ReactContext.Provider>;
  }
}

const LevelOne = () => {
  return (
    <div>
      <LevelTwo />
    </div>
  );
};

const LevelTwo = () => {
  return (
    <ReactContext.Consumer>
      {({ title }) => {
        return (
          <div>
            <div>Level Two component has recieved property from Top Level: {title}</div>
          </div>
        );
      }}
    </ReactContext.Consumer>
  );
};
