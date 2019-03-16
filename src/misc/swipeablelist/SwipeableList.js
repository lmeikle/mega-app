import React, { Component } from 'react';
import SwipeableListItem from './item/SwipeableListItem';
import './styles.css';

class SwipeableList extends Component {
  render() {
    return (
      <div className="List">
        <SwipeableListItem>List item 1</SwipeableListItem>
        <SwipeableListItem>List item 2</SwipeableListItem>
        <SwipeableListItem>List item 3</SwipeableListItem>
        <SwipeableListItem>List item 4</SwipeableListItem>
        <SwipeableListItem>List item 5</SwipeableListItem>
      </div>
    );
  }
}

export default SwipeableList;
