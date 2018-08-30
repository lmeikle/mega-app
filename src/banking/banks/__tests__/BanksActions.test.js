import * as BanksActions from '../BanksActions';

describe('BanksActions', () => {
  test('should create an action to get banks', () => {
    const expectedAction = {
      type: BanksActions.GET_BANKS
    };
    expect(BanksActions.getBanks()).toEqual(expectedAction);
  });

  test('should create an action to say that get banks has been requested', () => {
    const expectedAction = {
      type: BanksActions.GET_BANKS_REQUESTED
    };
    expect(BanksActions.getBanksRequested()).toEqual(expectedAction);
  });

  test('should create an action to say that get banks was successful', () => {
    const data = [];
    const expectedAction = {
      type: BanksActions.GET_BANKS_SUCCESS,
      payload: {
        data
      }
    };
    expect(BanksActions.getBanksSuccess(data)).toEqual(expectedAction);
  });

  test('should create an action to say that get banks failed', () => {
    const error = 'something went wrong';
    const expectedAction = {
      type: BanksActions.GET_BANKS_FAILED,
      payload: {
        error
      }
    };
    expect(BanksActions.getBanksFailed(error)).toEqual(expectedAction);
  });
});
