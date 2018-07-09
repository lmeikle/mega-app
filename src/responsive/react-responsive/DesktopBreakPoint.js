import React from 'react';
import BreakPoint from './BreakPoint';

export default function DesktopBreakPoint(props) {
  return <BreakPoint name="desktop">{props.children}</BreakPoint>;
}
