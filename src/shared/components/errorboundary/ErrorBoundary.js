import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
      info: ''
    };
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      error,
      info
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <h3>{this.state.error.toString()}</h3>
          <h3>{this.state.info.componentStack}</h3>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
