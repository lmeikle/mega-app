import React, { Component } from 'react';
import { Toggleable } from '../renderprops/Toggleable';
import MenuItem from '../componentinjection/MenuItem';

const withToggleable = UnwrappedComponent => {
  class WithToggleable extends Component {
    static displayName = `${WithToggleable.displayName}(${UnwrappedComponent.displayName})`;

    static WrappedComponent = UnwrappedComponent;

    render() {
      return <Toggleable render={renderProps => <UnwrappedComponent {...this.props} {...renderProps} />} />;
    }
  }

  WithToggleable.displayName = 'WithToggleable';

  return WithToggleable;
};

const ToggleableMenuHOC = withToggleable(MenuItem);
export default ToggleableMenuHOC;
