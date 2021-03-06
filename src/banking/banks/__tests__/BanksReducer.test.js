import { banks } from '../BanksReducer';
import { BanksActionTypes } from '../BanksTypes';

const initialState = {
  isFetching: true,
  banksWithAtmAPI: []
};

const failedState = {
  isFetching: false,
  banksWithAtmAPI: []
};

describe('BanksReducer', () => {
  test('should return the initial state', () => {
    expect(banks(undefined, {})).toEqual(initialState);
  });

  test('should handle GET_BANKS_REQUESTED', () => {
    expect(
      banks(undefined, {
        type: BanksActionTypes.GET_BANKS_REQUESTED
      })
    ).toEqual(initialState);

    expect(
      banks(
        { someState: 'whatever' },
        {
          type: BanksActionTypes.GET_BANKS_REQUESTED
        }
      )
    ).toEqual(initialState);
  });

  test('should handle GET_BANKS_SUCCESS', () => {
    expect(
      banks(undefined, {
        type: BanksActionTypes.GET_BANKS_SUCCESS,
        payload: {
          data: [
            {
              name: 'Barclays Bank',
              brands: ['Barclays Bank'],
              baseUrl: 'https://atlas.api.barclays/open-banking',
              supportedAPIs: {
                atms: ['v2.1'],
                branches: ['v2.1'],
                'personal-current-accounts': ['v2.1'],
                'business-current-accounts': ['v2.1'],
                'unsecured-sme-loans': ['v2.1'],
                'commercial-credit-cards': ['v2.1']
              }
            }
          ]
        }
      })
    ).toEqual({
      isFetching: false,
      banksWithAtmAPI: [
        {
          name: 'Barclays Bank',
          url: 'https://atlas.api.barclays/open-banking/v2.1/atms'
        }
      ]
    });
  });

  test('should handle GET_BANKS_FAILED', () => {
    expect(
      banks(undefined, {
        type: BanksActionTypes.GET_BANKS_FAILED
      })
    ).toEqual(failedState);

    expect(
      banks(
        { someState: 'whatever' },
        {
          type: BanksActionTypes.GET_BANKS_FAILED
        }
      )
    ).toEqual(failedState);
  });
});
