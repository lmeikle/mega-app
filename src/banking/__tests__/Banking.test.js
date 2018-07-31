import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { shallow, mount } from 'enzyme';
import Banking from '../page/Banking';
import { banking, bankingSagas } from '../';
import mocksAtmsResponse from '../atms/__tests__/mockAtmsResponse.json';

export function renderWrapper(withState = true) {
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
  let store = null;

  if (withState) {
    store = createStore(
      combineReducers({
        banking
      }),
      state,
      applyMiddleware(...middleware)
    );
  } else {
    store = createStore(
      combineReducers({
        banking
      }),
      applyMiddleware(...middleware)
    );
  }
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

/**
 * redux-mock-store allows us to see what actions were called on it
 */
export function renderMockStoreWrapper() {
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

function flushPromises() {
  return new Promise(resolve => setImmediate(resolve));
}

describe('Banking', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('renders correctly', () => {
    const banking = shallow(<Banking />);
    expect(banking).toMatchSnapshot();
  });

  test('mounts and renders a loading component and then the BanksComponents results', async () => {
    const [, wrapper] = renderWrapper(false);
    expect(wrapper.find('LoadingComponent').length).toBe(1);

    await flushPromises();
    wrapper.update();

    expect(wrapper.find('BanksComponent').length).toBe(13);
  });

  test('clicking on a BankComponent calls the GET_ATMS action', () => {
    let getAtmsAction = { payload: { name: 'Barclays Bank', url: 'https://www.example.com' }, type: 'atms/GET_ATMS' };

    const [store, wrapper] = renderWrapper();
    let dispatchSpy = jest.spyOn(store, 'dispatch');
    fetch.mockResponseOnce(JSON.stringify(mocksAtmsResponse));

    // { button: 0 } is important or it does not work!!
    wrapper.find('BanksComponent').simulate('click', { button: 0 });

    expect(dispatchSpy).toHaveBeenCalledWith(getAtmsAction);
    expect(fetch.mock.calls.length).toEqual(1);
    expect(store.getState().banking.atms.name).toEqual('Barclays Bank');
  });

  test('clicking on a BankComponent sets ATM data in the store atmsCache', async () => {
    const [store, wrapper] = renderWrapper();
    fetch.mockResponseOnce(JSON.stringify(mocksAtmsResponse));

    // { button: 0 } is important or it does not work!!
    wrapper.find('BanksComponent').simulate('click', { button: 0 });

    await flushPromises();

    expect(store.getState().banking.atms.atmsCache['https://www.example.com'].length).toBe(1);
  });

  test('clicking on a BankComponent renders AtmsComponent', async () => {
    const [store, wrapper] = renderWrapper(false);

    await flushPromises();
    wrapper.update();

    fetch.mockResponseOnce(JSON.stringify(mocksAtmsResponse));

    // { button: 0 } is important or it does not work!!
    wrapper
      .find('BanksComponent')
      .at(0)
      .simulate('click', { button: 0 });

    await flushPromises();
    wrapper.update();

    expect(wrapper.find('AtmsComponent').length).toBe(1);
  });

  test('clicking on a BankComponent dispatches the correct actions', async () => {
    const [store, wrapper] = renderMockStoreWrapper();
    fetch.mockResponseOnce(JSON.stringify(mocksAtmsResponse));

    // { button: 0 } is important or it does not work!!
    wrapper.find('BanksComponent').simulate('click', { button: 0 });

    await flushPromises();

    expect(store.getActions()[0].type).toEqual('banks/GET_BANKS');
    expect(store.getActions()[1].type).toEqual('atms/GET_ATMS');
    expect(store.getActions()[2].type).toEqual('atms/GET_ATMS_REQUESTED');
    expect(store.getActions()[3].type).toEqual('atms/GET_ATMS_SUCCESS');
  });
});
