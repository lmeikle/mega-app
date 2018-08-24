import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ReactToastify.css';

export default class ReactToastify extends Component {
  notify = () => {
    toast('Wow so easy !');

    toast.success('Success Notification !', {
      position: toast.POSITION.TOP_CENTER
    });

    toast.error('Error Notification !', {
      position: toast.POSITION.TOP_LEFT
    });

    toast.warn('Warning Notification !', {
      position: toast.POSITION.BOTTOM_LEFT
    });

    toast.info('Info Notification !', {
      position: toast.POSITION.BOTTOM_CENTER
    });

    toast('Custom Style Notification with css class!', {
      position: toast.POSITION.BOTTOM_RIGHT,
      className: 'foo-bar'
    });

    toast(({ closeToast }) => <div>Functional swag</div>);
  };

  render() {
    return (
      <div>
        <div className="react-toastify-title">React Toastify</div>
        <button onClick={this.notify}>Notify !</button>
        <ToastContainer />
      </div>
    );
  }
}
