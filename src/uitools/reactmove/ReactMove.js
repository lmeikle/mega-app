import React, { Component } from 'react';
import SVGChart from './svgchart/SVGChart';
import Toggle from './toggle/Toggle';
import './ReactMove.css';

class ReactMove extends Component {
  render() {
    return (
      <div>
        <div className="react-move-title">ReactMove</div>
        <h3>Toggle</h3>
        <Toggle />
        <h3>SVG Chart</h3>
        <SVGChart />
      </div>
    );
  }
}

export default ReactMove;
