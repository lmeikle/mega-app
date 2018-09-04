import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputFieldContainer extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    validate: PropTypes.func,
    onChange: PropTypes.func.isRequired
  };

  state = {
    value: this.props.value,
    capsLock: false,
    error: false
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.value !== this.props.value) {
      this.setState({ value: this.props.value });
    }
  }

  onChange = evt => {
    const name = this.props.name;
    const value = evt.target.value;
    let error = this.props.validate ? this.props.validate(value) : false;

    this.setState({ value, error });

    this.props.onChange({ name, value, error });
  };

  onKeyDown = evt => {
    let capsLock = false;
    if (evt.nativeEvent instanceof KeyboardEvent) {
      if (evt.nativeEvent.getModifierState('CapsLock')) {
        capsLock = true;
      }

      this.setState({ capsLock });
    }
  };

  render() {
    return (
      <div>
        <input placeholder={this.props.placeholder} value={this.state.value} onChange={this.onChange} onKeyDown={this.onKeyDown} />
        <br />
        <span style={{ color: 'red' }}>{this.state.error}</span>
        <br />
        <span style={{ color: 'red' }}>{this.state.capsLock ? 'CapsLock is on' : ''}</span>
      </div>
    );
  }
}

export default InputFieldContainer;
