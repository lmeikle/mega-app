import $ from 'jquery';
import jqGrid from 'free-jqgrid'; // eslint-disable-line no-unused-vars
import React, { Component } from 'react';
import './jqgrid.css';
import 'free-jqgrid/css/ui.jqgrid.min.css';
import 'jquery-ui/themes/base/core.css';
import 'jquery-ui/themes/base/menu.css';
import 'jquery-ui/themes/base/autocomplete.css';
import 'jquery-ui/themes/base/theme.css';

// https://www.js-tutorials.com/javascript-tutorial/jquery-tutorials/jquery-jqgrid-example-json-data-using-rest-service
class JQGridEdit extends Component {
  componentDidMount() {
    $('#table').jqGrid({
      url: 'https://jsonplaceholder.typicode.com/posts',
      datatype: 'json',
      colNames: ['ID', 'User ID', 'Title', 'Body'],
      colModel: [
        { name: 'id', index: 'id', width: 55, editable: false, template: 'integer' },
        { name: 'userId', index: 'userId', width: 70, editable: true },
        { name: 'title', index: 'title', width: 285, editable: true },
        { name: 'body', index: 'body', width: 350, sortable: false, editable: true, edittype: 'textarea' }
      ],
      rowNum: 10,
      loadonce: true,
      rowList: [10, 20, 30],
      pager: '#pager2',
      sortname: 'id',
      viewrecords: true,
      sortorder: 'asc',
      caption: '',
      autowidth: true,
      shrinkToFit: true,
      editable: true
    });

    $('#table').jqGrid(
      'navGrid',
      '#pager2',
      {
        edit: true,
        edittitle: 'Edit Post',
        width: 500,
        add: true,
        addtitle: 'Add Post',
        del: true,
        search: true,
        refresh: true,
        view: true
      },
      //Edit Options. save key parameter will keybind the Enter key to submit.
      {
        editCaption: 'Edit Post',
        edittext: 'Edit',
        closeOnEscape: true,
        closeAfterEdit: true,
        savekey: [true, 13],
        errorTextFormat: commonError,
        width: '500',
        reloadAfterSubmit: true,
        bottominfo: 'Fields marked with (*) are required',
        top: '60',
        left: '5',
        right: '5',
        onclickSubmit: function(response, postdata) {
          //call edit button
          EditComment(postdata);
        }
      },
      //add Options. save key parameter will keybind the Enter key to submit.
      {
        addCaption: 'Add Post',
        addtext: 'Add',
        closeOnEscape: true,
        closeAfterEdit: true,
        savekey: [true, 13],
        errorTextFormat: commonError,
        width: '500',
        reloadAfterSubmit: true,
        bottominfo: 'Fields marked with (*) are required',
        top: '60',
        left: '5',
        right: '5',
        onclickSubmit: function(response, postdata) {
          AddPost(postdata);
        }
      },
      //delete Options. save key parameter will keybind the Enter key to submit.
      {
        deleteCaption: 'delete Post',
        deletetext: 'Delete Post',
        closeOnEscape: true,
        closeAfterEdit: true,
        savekey: [true, 13],
        errorTextFormat: commonError,
        width: '500',
        reloadAfterSubmit: true,
        bottominfo: 'Fields marked with (*) are required',
        top: '60',
        left: '5',
        right: '5',
        onclickSubmit: function(response, postdata) {
          DeletePost(postdata);
        }
      }
    );

    function commonError(data) {
      return 'Error Occured during Operation. Please try again';
    }
    function EditComment(params) {
      //Here you need to define ajax call for update records to server
      console.log(params);
    }
    function AddPost(params) {
      //Here you need to define ajax call for insert records to server
      console.log(params);
    }
    function DeletePost(params) {
      //Here you need to define ajax call for delete records to server
      console.log(params);
    }
  }

  render() {
    return (
      <div>
        <h1>jqGrid Add, Edit and Delete Example</h1>
        <table id="table" className="display" cellSpacing="0" width="100%" />
        <div id="pager2" />
      </div>
    );
  }
}
export default JQGridEdit;
