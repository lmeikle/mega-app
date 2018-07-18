import { runSaga } from 'redux-saga';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import AtmsActions from '../AtmsActions';
import * as AtmsAPI from '../AtmsAPI';
import { getAtmsAsync } from '../AtmsSagas';
import * as AtmsSelectors from '../AtmsSelectors';
import mocksAtmsResponse from './mockAtmsResponse.json';

const requestParams = {
  name: 'Barlays',
  url: 'http://www.example.com'
};

const cachePayload = [
  { payload: { name: 'Barlays', url: 'http://www.example.com' }, type: 'atms/GET_ATMS_REQUESTED' },
  {
    payload: {
      response: {
        data: [
          {
            Brand: [
              {
                ATM: [
                  {
                    ATMServices: [Array],
                    Accessibility: [Array],
                    Branch: [Object],
                    Identification: 'UK-B-20133409',
                    Location: [Object],
                    SupportedCurrencies: [Array],
                    SupportedLanguages: [Array]
                  }
                ],
                BrandName: 'Barclays UK'
              }
            ]
          }
        ],
        meta: {
          Agreement: 'Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions',
          LastUpdated: '2018-06-01T23:55:05+0100',
          License: 'https://www.openbanking.org.uk/open-licence',
          TermsOfUse: 'https://www.openbanking.org.uk/terms',
          TotalResults: 2024
        }
      }
    },
    type: 'atms/GET_ATMS_SUCCESS'
  }
];

describe('AtmsSagas', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  /**test('getAtmsAsync successful', async done => {
    const dispatched = [];
    //  const spy = jest.fn();

    jest.spyOn(AtmsSelectors, 'getAtmsCache').mockImplementation(() => []);
    jest.spyOn(AtmsAPI, 'fetchAtmData').mockImplementation(() => mocksAtmsResponse);

    const result = await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      getAtmsAsync,
      { payload: requestParams }
    ).done;

    const expectedActions = [
      { type: AtmsActions.GET_ATMS_REQUESTED, payload: requestParams },
      { type: AtmsActions.GET_ATMS_SUCCESS, payload: { response: mocksAtmsResponse } }
    ];

    expect(dispatched).toEqual(expectedActions);

    done();
  });*/

  test('getAtmsAsync when we already have the data in the cache', async done => {
    const dispatched = [];
    const spy = jest.fn();

    jest.spyOn(AtmsSelectors, 'getAtmsCache').mockImplementation(() => {
      [requestParams.url] = {};
    });

    const result = await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      getAtmsAsync,
      { payload: requestParams }
    ).done;

    const expectedActions = [
      { type: AtmsActions.GET_ATMS_REQUESTED, payload: requestParams },
      { type: AtmsActions.GET_ATMS_SUCCESS, payload: { response: mocksAtmsResponse } }
    ];

    expect(dispatched).toEqual(expectedActions);

    done();
  });

  test('getAtmsAsync failed', async done => {
    const dispatched = [];
    const spy = jest.fn();
    let err = new Error('something went wrong');

    jest.spyOn(AtmsSelectors, 'getAtmsCache').mockImplementation(() => []);
    jest.spyOn(AtmsAPI, 'fetchAtmData').mockImplementation(() => {
      throw err;
    });

    const result = await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      getAtmsAsync,
      { payload: requestParams }
    ).done;

    const expectedActions = [
      { type: AtmsActions.GET_ATMS_REQUESTED, payload: requestParams },
      { type: AtmsActions.GET_ATMS_FAILED, payload: { error: err } }
    ];

    expect(dispatched).toEqual(expectedActions);

    done();
  });
});
