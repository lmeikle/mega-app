import React from 'react';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};

const withRequestAnimationFrame = _ => WrappedComponent => {
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
      return <WrappedComponent timeStamp={this.state.timeStamp} {...this.props} />;
    }
  }

  return RequestAnimationFrame;
};

const RequestAnimationFrameHOC = props => (
  <div style={styles}>
    <h1>{props.timeStamp}</h1>
  </div>
);

export default withRequestAnimationFrame()(RequestAnimationFrameHOC);
