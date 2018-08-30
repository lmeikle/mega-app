import {
  getAtms,
  getAtmsRequested,
  getAtmsSuccess,
  getAtmsFailed,
  GET_ATMS,
  GET_ATMS_REQUESTED,
  GET_ATMS_SUCCESS,
  GET_ATMS_FAILED
} from '../AtmsActions';

describe('AtmsActions', () => {
  test('should create an action to get atms', () => {
    const expectedAction = {
      type: GET_ATMS,
      payload: {
        name: 'Barlays',
        url: 'http://www.example.com'
      }
    };
    expect(getAtms('Barlays', 'http://www.example.com')).toEqual(expectedAction);
  });

  test('should create an action to say that get atms has been requested', () => {
    const expectedAction = {
      type: GET_ATMS_REQUESTED,
      payload: {
        name: 'Barlays',
        url: 'http://www.example.com'
      }
    };
    expect(getAtmsRequested('Barlays', 'http://www.example.com')).toEqual(expectedAction);
  });

  test('should create an action to say that get atms was successful', () => {
    const response = {};
    const expectedAction = {
      type: GET_ATMS_SUCCESS,
      payload: {
        response
      }
    };
    expect(getAtmsSuccess(response)).toEqual(expectedAction);
  });

  test('should create an action to say that get atms failed', () => {
    const error = 'something went wrong';
    const expectedAction = {
      type: GET_ATMS_FAILED,
      payload: {
        error
      }
    };
    expect(getAtmsFailed(error)).toEqual(expectedAction);
  });
});
