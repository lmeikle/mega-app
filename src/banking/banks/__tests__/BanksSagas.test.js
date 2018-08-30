import { runSaga } from 'redux-saga';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import * as BanksActions from '../BanksActions';
import * as BanksAPI from '../BanksAPI';
import { getBanksAsync } from '../BanksSagas';
import * as BanksSelectors from '../BanksSelectors';

describe('BanksSagas', () => {
  test('getBanksAsync successful', async done => {
    const dispatched = [];
    const spy = jest.fn();

    jest.spyOn(BanksSelectors, 'getBanksWithAtmAPI').mockImplementation(() => []);
    jest.spyOn(BanksAPI, 'fetchBanksWithAtmAPIData').mockImplementation(() => [{ some: 'value' }]);

    const result = await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      getBanksAsync
    ).done;

    const expectedActions = [
      { type: BanksActions.GET_BANKS_REQUESTED },
      { type: BanksActions.GET_BANKS_SUCCESS, payload: { data: [{ some: 'value' }] } }
    ];

    expect(dispatched).toEqual(expectedActions);

    done();
  });

  test('getBanksAsync failed', async done => {
    const dispatched = [];
    const spy = jest.fn();
    let err = new Error('something went wrong');

    jest.spyOn(BanksSelectors, 'getBanksWithAtmAPI').mockImplementation(() => []);
    jest.spyOn(BanksAPI, 'fetchBanksWithAtmAPIData').mockImplementation(() => {
      throw err;
    });

    const result = await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      getBanksAsync
    ).done;

    const expectedActions = [{ type: BanksActions.GET_BANKS_REQUESTED }, { type: BanksActions.GET_BANKS_FAILED, payload: { error: err } }];

    expect(dispatched).toEqual(expectedActions);

    done();
  });
});
