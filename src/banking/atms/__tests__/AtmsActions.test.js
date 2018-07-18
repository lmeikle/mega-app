import AtmsActions from '../AtmsActions';

describe('AtmsActions', () => {
  test('should create an action to get atms', () => {
    const expectedAction = {
      type: AtmsActions.GET_ATMS,
      payload: {
        name: 'Barlays',
        url: 'http://www.example.com'
      }
    };
    expect(AtmsActions.getAtms('Barlays', 'http://www.example.com')).toEqual(expectedAction);
  });

  test('should create an action to say that get atms has been requested', () => {
    const expectedAction = {
      type: AtmsActions.GET_ATMS_REQUESTED,
      payload: {
        name: 'Barlays',
        url: 'http://www.example.com'
      }
    };
    expect(AtmsActions.getAtmsRequested('Barlays', 'http://www.example.com')).toEqual(expectedAction);
  });

  test('should create an action to say that get atms was successful', () => {
    const response = {};
    const expectedAction = {
      type: AtmsActions.GET_ATMS_SUCCESS,
      payload: {
        response
      }
    };
    expect(AtmsActions.getAtmsSuccess(response)).toEqual(expectedAction);
  });

  test('should create an action to say that get atms failed', () => {
    const error = 'something went wrong';
    const expectedAction = {
      type: AtmsActions.GET_ATMS_FAILED,
      payload: {
        error
      }
    };
    expect(AtmsActions.getAtmsFailed(error)).toEqual(expectedAction);
  });
});
