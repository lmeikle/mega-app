import React, { Component } from 'react';
import { ToastConsumer, ToastProvider, withToastManager } from 'react-toast-notifications';
import './ReactToastNotifications.css';

class FormWithToasts extends Component {
  onSubmit = evt => {
    evt.preventDefault();

    const { toastManager } = this.props;
    //const { error, success } = validate(evt);
    let error = 'oops';
    let success = 'well done!';

    if (error) {
      toastManager.add(`Something went wrong: "${error}"`, {
        appearance: 'error'
      });
    } else if (success) {
      toastManager.add('Saved Successfully', { appearance: 'success' });
    }
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <button type="submit">Form Add Toast</button>
      </form>
    );
  }
}

let Demo = ({ children, toastManager }) => (
  <button
    onClick={() =>
      toastManager.add(children, {
        appearance: 'success',
        autoDismiss: true
      })
    }
  >
    Simple Demo Add Toast
  </button>
);

// wrap your component to pass in the `toastManager` prop
Demo = withToastManager(Demo);
FormWithToasts = withToastManager(FormWithToasts);

export default class ReactToastNotifications extends Component {
  render() {
    return (
      <div>
        <div className="react-toast-notifications-title">React Toast Notifications</div>
        <ToastProvider>
          <Demo>yeah yeah yeah</Demo>
          <br />
          <br />
          <FormWithToasts />
          <br />
          <br />
          {/* or if render props are more your speed */}
          <ToastConsumer>
            {({ add }) => {
              return <button onClick={e => add(`Notified by ${e.target}`, { appearance: 'success' })}>Toasty</button>;
            }}
          </ToastConsumer>
        </ToastProvider>
      </div>
    );
  }
}
