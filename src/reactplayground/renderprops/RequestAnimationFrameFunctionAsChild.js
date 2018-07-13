import React from 'react';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};

class RequestAnimationFrame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeStamp: 0,
      request: null
    };
  }

  componentDidMount() {
    this.setState({
      request: requestAnimationFrame(this.tick)
    });
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.state.request);
  }

  tick = timeStamp => {
    this.setState({
      timeStamp: timeStamp,
      request: requestAnimationFrame(this.tick)
    });
  };

  render() {
    if (typeof this.props.children !== 'function') {
      throw new Error('Children should be a Function!');
    }

    return this.props.children(this.state.timeStamp);
  }
}

const RequestAnimationFrameFunctionAsChild = () => (
  <div style={styles}>
    <RequestAnimationFrame>{timeStamp => <h1>{timeStamp}</h1>}</RequestAnimationFrame>
  </div>
);

export default RequestAnimationFrameFunctionAsChild;
