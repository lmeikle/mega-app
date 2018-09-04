import { getBanks, getBanksRequested, getBanksSuccess, getBanksFailed } from '../BanksActions';
import { BanksActionTypes } from '../BanksTypes';

describe('BanksActions', () => {
  test('should create an action to get banks', () => {
    const expectedAction = {
      type: BanksActionTypes.GET_BANKS
    };
    expect(getBanks()).toEqual(expectedAction);
  });

  test('should create an action to say that get banks has been requested', () => {
    const expectedAction = {
      type: BanksActionTypes.GET_BANKS_REQUESTED
    };
    expect(getBanksRequested()).toEqual(expectedAction);
  });

  test('should create an action to say that get banks was successful', () => {
    const data = [];
    const expectedAction = {
      type: BanksActionTypes.GET_BANKS_SUCCESS,
      payload: {
        data
      }
    };
    expect(getBanksSuccess(data)).toEqual(expectedAction);
  });

  test('should create an action to say that get banks failed', () => {
    const error = 'something went wrong';
    const expectedAction = {
      type: BanksActionTypes.GET_BANKS_FAILED,
      payload: {
        error
      }
    };
    expect(getBanksFailed(error)).toEqual(expectedAction);
  });
});
