import { applyMiddleware, createStore, combineReducers, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { banking, bankingSagas, BankingStoreProps } from './banking/';
import { form, courseSignup, courseSignupSagas } from './forms/';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

export interface StoreStateProps {
  banking: BankingStoreProps;
  form: object;
  courseSignup: object;
}

/**
 * Might need to make some router changes when upgrade
 * https://medium.com/@resir014/redux-4-typescript-2-9-a-type-safe-approach-7f073917b803
 */
export const configureStore = (): Store<StoreStateProps> => {
  const composeEnhancers = composeWithDevTools({
    features: {
      export: true
    }
  });

  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware]; // lets us dispatch() functions
  if (process.env.NODE_ENV !== 'production') {
    //  middleware.push(require('redux-diff-logger'));
    //  middleware.push(require('redux-logger').createLogger());
    //  const { whyDidYouUpdate } = require('why-did-you-update');
    //  whyDidYouUpdate(React);
  }

  const rootReducer = combineReducers({
    banking,
    form,
    courseSignup
  });

  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

  sagaMiddleware.run(bankingSagas);
  sagaMiddleware.run(courseSignupSagas);

  return store;
};
