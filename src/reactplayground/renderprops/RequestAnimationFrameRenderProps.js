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
    return this.props.render(this.state.timeStamp);
  }
}

const RequestAnimationFrameRenderProps = () => (
  <div style={styles}>
    <RequestAnimationFrame render={timeStamp => <h1>{timeStamp}</h1>} />
  </div>
);

export default RequestAnimationFrameRenderProps;
