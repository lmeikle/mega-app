import React, { Component } from 'react';
import { FixedSizeList as List } from 'react-window';
import { FixedSizeGrid as Grid } from 'react-window';
import './ReactWindow.css';

export default class ReactWindow extends Component {
  listRef = React.createRef();

  scrollToRow200Auto = () => {
    this.listRef.current.scrollToItem(200, 'start');
  };

  render() {
    return (
      <div>
        <div className="react-window-title">ReactWindow</div>
        <h3>Fixed Size ist</h3>
        <List className="List" height={150} itemCount={1000} itemSize={35} width={300} ref={this.listRef}>
          {({ index, style }) => (
            <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
              Row {index}
            </div>
          )}
        </List>
        <button className="ExampleButton" onClick={this.scrollToRow200Auto}>
          Scroll to row 200 (align: auto)
        </button>

        <h3>Fixed Size Grid</h3>
        <Grid className="Grid" columnCount={1000} columnWidth={100} height={150} rowCount={1000} rowHeight={35} width={300}>
          {({ columnIndex, rowIndex, style }) => (
            <div
              className={columnIndex % 2 ? (rowIndex % 2 === 0 ? 'GridItemOdd' : 'GridItemEven') : rowIndex % 2 ? 'GridItemOdd' : 'GridItemEven'}
              style={style}
            >
              r{rowIndex}, c{columnIndex}
            </div>
          )}
        </Grid>
      </div>
    );
  }
}
