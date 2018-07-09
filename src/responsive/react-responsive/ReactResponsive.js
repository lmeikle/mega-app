import React, { Component } from 'react';
import DesktopBreakPoint from './DesktopBreakPoint';
import PhoneBreakPoint from './PhoneBreakPoint';
import TabletBreakPoint from './TabletBreakPoint';

export default class ReactResponsive extends Component {
  render() {
    return (
      <div>
        <h2>My Breakpoints!</h2>
        <DesktopBreakPoint>
          <h3>DesktopBreakPoint!</h3>
        </DesktopBreakPoint>
        <TabletBreakPoint>
          <h3>TabletBreakPoint!</h3>
        </TabletBreakPoint>
        <PhoneBreakPoint>
          <h3>PhoneBreakPoint</h3>
        </PhoneBreakPoint>
      </div>
    );
  }
}
