import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import { banking, bankingSagas } from './banking/';
import { form, courseSignup, courseSignupSagas } from './forms/';
import 'semantic-ui-css/semantic.min.css';

import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
const composeEnhancers = composeWithDevTools({
  export: true
});

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]; // lets us dispatch() functions
if (process.env.NODE_ENV !== 'production') {
  //  middleware.push(require('redux-diff-logger'));
  //  middleware.push(require('redux-logger').createLogger());
  //  const { whyDidYouUpdate } = require('why-did-you-update');
  //  whyDidYouUpdate(React);
}

const store = createStore(
  combineReducers({
    banking,
    form,
    courseSignup
  }),
  composeEnhancers(applyMiddleware(...middleware))
);

sagaMiddleware.run(bankingSagas);
sagaMiddleware.run(courseSignupSagas);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
