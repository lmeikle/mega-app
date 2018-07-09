import React, { Component } from 'react';
import DetectLayout from './DetectLayout';

class ExamplePage extends Component {
  render() {
    const { isSmallLayout } = this.props;

    return (
      <div>
        {isSmallLayout && <div>Small Layout</div>}
        {!isSmallLayout && <div>Large Layout</div>}
      </div>
    );
  }
}

const HigherOrderComponent = DetectLayout(ExamplePage);
export default HigherOrderComponent;
