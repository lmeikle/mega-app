import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { shallow, mount } from 'enzyme';
import Banking from '../Banking';
import { banking, bankingSagas } from '../../';
import mocksAtmsResponse from '../../atms/__tests__/mockAtmsResponse.json';

export function renderWithState() {
  let state = {
    banking: {
      banks: {
        isFetching: false,
        banksWithAtmAPI: [
          {
            name: 'Barclays Bank',
            url: 'https://www.example.com'
          }
        ]
      }
    }
  };

  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware]; // lets us dispatch() functions
  const store = createStore(
    combineReducers({
      banking
    }),
    state,
    applyMiddleware(...middleware)
  );
  sagaMiddleware.run(bankingSagas);

  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/banking']} initialIndex={0}>
        <Route path="/banking" component={Banking} />
      </MemoryRouter>
    </Provider>
  );

  return [store, wrapper];
}

export function renderWithStateMockStore() {
  let state = {
    banking: {
      banks: {
        isFetching: false,
        banksWithAtmAPI: [
          {
            name: 'Barclays Bank',
            url: 'https://www.example.com'
          }
        ]
      },
      atms: {
        isFetching: true,
        geolocation: null,
        name: null,
        url: null,
        atmsCache: {},
        error: null
      }
    }
  };

  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware]; // lets us dispatch() functions
  const mockStore = configureMockStore(middleware);
  const store = mockStore(state);
  sagaMiddleware.run(bankingSagas);

  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/banking']} initialIndex={0}>
        <Route path="/banking" component={Banking} />
      </MemoryRouter>
    </Provider>
  );

  return [store, wrapper];
}

describe('Banking', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('renders correctly', () => {
    const banking = shallow(<Banking />);
    expect(banking).toMatchSnapshot();
  });

  test('handles state correctly', () => {
    const [, wrapper] = renderWithState();
    expect(wrapper.find('BanksComponent').length).toBe(1);
  });

  test('clicking on a BankComponent calls the GET_ATMS action', () => {
    let getAtmsAction = { payload: { name: 'Barclays Bank', url: 'https://www.example.com' }, type: 'atms/GET_ATMS' };

    const [store, wrapper] = renderWithState();
    let dispatchSpy = jest.spyOn(store, 'dispatch');
    fetch.mockResponseOnce(JSON.stringify(mocksAtmsResponse));

    // { button: 0 } is important or it does not work!!
    wrapper.find('BanksComponent').simulate('click', { button: 0 });

    expect(dispatchSpy).toHaveBeenCalledWith(getAtmsAction);
    expect(fetch.mock.calls.length).toEqual(1);
    expect(store.getState().banking.atms.name).toEqual('Barclays Bank');
  });

  test('clicking on a BankComponent sets ATM data in the store atmsCache', () => {
    const [store, wrapper] = renderWithState();
    fetch.mockResponseOnce(JSON.stringify(mocksAtmsResponse));

    // { button: 0 } is important or it does not work!!
    wrapper.find('BanksComponent').simulate('click', { button: 0 });

    const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));
    return flushAllPromises().then(() => {
      expect(store.getState().banking.atms.atmsCache['https://www.example.com'].length).toBe(1);
    });
  });

  test('clicking on a BankComponent dispatches the correct actions', () => {
    const [store, wrapper] = renderWithStateMockStore();
    fetch.mockResponseOnce(JSON.stringify(mocksAtmsResponse));

    // { button: 0 } is important or it does not work!!
    wrapper.find('BanksComponent').simulate('click', { button: 0 });

    const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));
    return flushAllPromises().then(() => {
      expect(store.getActions()[0].type).toEqual('banks/GET_BANKS');
      expect(store.getActions()[1].type).toEqual('atms/GET_ATMS');
      expect(store.getActions()[2].type).toEqual('atms/GET_ATMS_REQUESTED');
      expect(store.getActions()[3].type).toEqual('atms/GET_ATMS_SUCCESS');
    });
  });
});
