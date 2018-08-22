import React, { Component } from 'react';
import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries } from 'react-vis';
import response from './response.json';
import 'react-vis/dist/style.css';
import './ReactVis.css';

/**
 * Simple Chart using react-vis library
 *
 * For something more complex:
 * https://towardsdatascience.com/advanced-visualization-with-react-vis-efc5c6667b4
 */
class ReactVis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  componentDidMount() {
    this.setState({
      results: response.results.filter(r => {
        return r.name === 'JavaScript';
      })
    });
  }

  render() {
    const { results } = this.state;

    const dataArr = results.map(d => {
      return {
        x: d.year + '/' + d.quarter,
        y: parseFloat(d.count / 1000)
      };
    });

    return (
      <div>
        <div className="react-vis-title">ReactVis</div>
        <XYPlot width={500} height={300} xType="ordinal">
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis title="Period of time(year and quarter)" />
          <YAxis title="Number of pull requests (thousands)" />
          {
            //<LineSeries data={[{ x: 1, y: 4 }, { x: 5, y: 2 }, { x: 15, y: 6 }]} />
          }
          <LineSeries data={dataArr} style={{ stroke: 'violet', strokeWidth: 3 }} />
        </XYPlot>
      </div>
    );
  }
}

export default ReactVis;
