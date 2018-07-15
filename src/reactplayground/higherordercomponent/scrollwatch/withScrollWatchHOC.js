import React, { Component } from 'react';

// Watch scrolling and report 'x' and 'y' position to WrappedComponent
const getDisplayName = c => c.displayName || c.name || 'Component';
const withScrollWatch = WrappedComponent => {
  return class extends Component {
    displayName = `withScrollWatch(${getDisplayName(WrappedComponent)}`;

    state = { x: 0, y: 0 };

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = e => {
      this.setState({
        x: window.scrollX,
        y: window.scrollY
      });
    };

    render() {
      return <WrappedComponent {...this.state} {...this.props} />;
    }
  };
};

export default withScrollWatch;
