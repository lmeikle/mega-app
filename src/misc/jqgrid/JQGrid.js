import $ from 'jquery';
import jqGrid from 'free-jqgrid'; // eslint-disable-line no-unused-vars
import React, { Component } from 'react';
import './jqgrid.css';
import 'free-jqgrid/css/ui.jqgrid.min.css';

// https://www.js-tutorials.com/javascript-tutorial/jquery-tutorials/jquery-jqgrid-example-json-data-using-rest-service
class JQGrid extends Component {
  componentDidMount() {
    $('#table').jqGrid({
      url: 'http://jsonplaceholder.typicode.com/posts',
      datatype: 'json',
      colNames: ['ID', 'User ID', 'Title', 'Body'],
      colModel: [
        { name: 'id', index: 'id', width: 55 },
        { name: 'userId', index: 'userId', width: 70, align: 'center' },
        { name: 'title', index: 'title', width: 285, align: 'left', search: true },
        { name: 'body', index: 'body', width: 350, sortable: false }
      ],
      rowNum: 10,
      loadonce: true,
      rowList: [10, 20, 30],
      pager: '#pager',
      sortname: 'id',
      viewrecords: true,
      sortorder: 'desc',
      caption: 'jqGrid Basic Example',
      autowidth: true,
      shrinkToFit: true,
      beforeProcessing: function(data) {
        // modify the data before displaying
        return data.map(item => (item.title = 'laura: ' + item.title));
      }
    });
  }

  render() {
    return (
      <div className="jqgrid">
        <h1>jqGrid Basic Example</h1>
        <table id="table" className="display" cellSpacing="0" width="100%" />
        <div id="pager" />
      </div>
    );
  }
}
export default JQGrid;
