import React, { Component } from 'react';
class Child extends Component {
  constructor(props) {
    super(props);

    throw new Error('I am the message in the error that was thrown');
  }
  render() {
    return (
      <div>
        <h3>Child</h3>
      </div>
    );
  }
}
export default Child;
