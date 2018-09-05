import React, { Component } from 'react';
import ToggleableMenu from './renderprops/ToggleableMenu';
import ToggleableMenuComponentInjection from './componentinjection/ToggleableMenuComponentInjection';
import ToggleableMenuHOC from './hoc/ToggleableMenuHOC';

/**
 * https://levelup.gitconnected.com/ultimate-react-component-patterns-with-typescript-2-8-82990c516935
 */
class TypeScriptPatterns extends Component {
  render() {
    return (
      <div>
        <h3>Using Render Props</h3>
        <div>
          <ToggleableMenu title="First Menu">First content</ToggleableMenu>
          <ToggleableMenu title="Second Menu">Second content</ToggleableMenu>
          <ToggleableMenu title="Third Menu">Third content</ToggleableMenu>
        </div>
        <h3>Using component injection</h3>
        <div>
          <ToggleableMenuComponentInjection title="First ComponentInjection">First content ComponentInjection</ToggleableMenuComponentInjection>
          <ToggleableMenuComponentInjection title="Second ComponentInjection">
            Second content ToggleableMenuComponentInjection
          </ToggleableMenuComponentInjection>
          <ToggleableMenuComponentInjection title="Third ComponentInjection">
            Third content ToggleableMenuComponentInjection
          </ToggleableMenuComponentInjection>
        </div>
        <h3>Using HOC (not bothered with typescript here)</h3>
        <div>
          <ToggleableMenuHOC title="First HOC">First content HOC</ToggleableMenuHOC>
          <ToggleableMenuHOC title="Second HOC">Second content HOC</ToggleableMenuHOC>
          <ToggleableMenuHOC title="Third HOC">Third content HOC</ToggleableMenuHOC>
        </div>
      </div>
    );
  }
}
export default TypeScriptPatterns;
