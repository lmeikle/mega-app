import { Component } from 'react';
import PropTypes from 'prop-types';

// ScrollWatchRenderProps - compose any component(s) that need
// to make use of the current 'x' and 'y' scroll position.
class ScrollWatchRenderProps extends Component {
  state = { x: 0, y: 0 };

  propTypes = { render: PropTypes.func.isRequired };

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
    const { x, y } = this.state;
    return this.props.render(x, y);
  }
}

export default ScrollWatchRenderProps;
