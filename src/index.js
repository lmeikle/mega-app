import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import { banking, bankingSagas } from './banking/';

//import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
//import { REDUX_DEVTOOLS_SETTINGS } from '../constants';
//const composeEnhancers = composeWithDevTools(REDUX_DEVTOOLS_SETTINGS);
//const middleware = [thunkMiddleware]; // lets us dispatch() functions
//if (process.env.NODE_ENV !== 'production')
//{
//	middleware.push(require('redux-logger').createLogger()); // neat middleware that logs actions
//}

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]; // lets us dispatch() functions

const store = createStore(
  combineReducers({
    banking
  }),
  applyMiddleware(...middleware)
  // composeEnhancers(applyMiddleware(...middleware)),
);

sagaMiddleware.run(bankingSagas);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
