import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app/App';
import { configureStore } from './configureStore';
import registerServiceWorker from './registerServiceWorker';
import './semantic-ui-styles.js'; // rather than import 'semantic-ui-css/semantic.min.css'; we only import what we use
import './index.css';

export const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    {/**<React.StrictMode>
        <App />
      </React.StrictMode>*/}
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
