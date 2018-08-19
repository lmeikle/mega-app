import React, { Component } from 'react';
import loremIpsum from 'lorem-ipsum';
import { List, AutoSizer, CellMeasurer, CellMeasurerCache } from 'react-virtualized';
import 'react-virtualized/styles.css'; // only needs to be imported once
import './ReactVirtualized.css';

const rowCount = 1000;

// https://blog.logrocket.com/rendering-large-lists-with-react-virtualized-82741907a6b3
export default class ReactVirtualized extends Component {
  constructor(props) {
    super(props);

    this.cache = new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 200
    });

    this.list = Array(rowCount)
      .fill()
      .map((val, idx) => {
        return {
          id: idx,
          name: 'John Doe',
          image: 'http://via.placeholder.com/40',
          text: loremIpsum({
            count: 2,
            units: 'sentences',
            sentenceLowerBound: 10,
            sentenceUpperBound: 50
          })
        };
      });
  }

  renderRow = ({ index, key, style, parent }) => {
    return (
      <CellMeasurer key={key} cache={this.cache} parent={parent} columnIndex={0} rowIndex={index}>
        <div style={style} className="react-virtualized-row">
          <div>
            <img src={this.list[index].image} alt="" />
          </div>
          <div className="react-virtualized-row-content">
            <div>{this.list[index].name}</div>
            <div>{this.list[index].text}</div>
          </div>
        </div>
      </CellMeasurer>
    );
  };

  render() {
    return (
      <React.Fragment>
        <div className="react-virtualized-title">React Virtualized</div>
        <div className="react-virtualized-list">
          <AutoSizer>
            {({ height, width }) => {
              return (
                <List
                  width={width}
                  height={height}
                  deferredMeasurementCache={this.cache}
                  rowHeight={this.cache.rowHeight}
                  rowRenderer={this.renderRow}
                  rowCount={this.list.length}
                />
              );
            }}
          </AutoSizer>
        </div>
      </React.Fragment>
    );
  }
}
