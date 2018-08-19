import React, { Component } from 'react';
import $ from 'jquery';
import Grid from 'tui-grid';
import { gridData } from './dummyData';
import 'tui-grid/dist/tui-grid.min.css';
import './ToastUI.css';

export default class ToastUI extends Component {
  componentDidMount() {
    new Grid({
      el: $('#grid'),
      data: gridData,
      scrollX: false,
      scrollY: true,
      columns: [
        {
          title: 'Name',
          name: 'name'
        },
        {
          title: 'Artist',
          name: 'artist'
        },
        {
          title: 'Type',
          name: 'type'
        },
        {
          title: 'Release',
          name: 'release'
        },
        {
          title: 'Genre',
          name: 'genre'
        }
      ]
    });
  }

  render() {
    return (
      <div>
        <div className="toast-ui-title">ToastUI</div>
        <h4>This isn't that great, already issue with scrolling, not much online help</h4>
        <div id="grid" />
      </div>
    );
  }
}
