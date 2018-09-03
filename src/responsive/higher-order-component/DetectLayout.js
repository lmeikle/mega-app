import React, { Component } from 'react';

const SMALL_LAYOUT_THRESHOLD = 600;

/**
 * Higher order component for responsive layout functionality
 * Based on "Responsive components" from {@link http://blog.jakoblind.no/real-world-higher-order-components-hocs/}
 * @param WrappedComponent - The base component to make responsive
 */
export default function DetectLayout(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        width: window.innerWidth
      };
    }

    componentDidMount() {
      window.addEventListener('resize', this._handleResize);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this._handleResize);
    }

    _handleResize = () => {
      this.setState({ width: window.innerWidth });
    };

    render() {
      return <WrappedComponent isSmallLayout={this.state.width <= SMALL_LAYOUT_THRESHOLD} {...this.props} />;
    }
  };
}
