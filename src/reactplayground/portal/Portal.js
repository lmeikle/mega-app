import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Portal.css';

class Portal extends Component {
  componentDidMount() {
    document.getElementById('modal-root').style.display = 'block';
  }

  componentWillUnmount() {
    document.getElementById('modal-root').style.display = 'none';
  }

  render() {
    return ReactDOM.createPortal(
      <div className="portal">
        <div className="portal-item">Portal Attached to modal root node</div>
      </div>,
      document.getElementById('modal-root')
    );
  }
}
export default Portal;
