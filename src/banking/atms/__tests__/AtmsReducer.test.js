import atms from '../AtmsReducer';
import AtmsActions from '../AtmsActions';
import mocksAtmsResponse from './mockAtmsResponse.json';

const initialState = {
  isFetching: true,
  geolocation: null,
  name: null,
  url: null,
  atmsCache: {},
  error: null
};

const requestedState = {
  ...initialState,
  name: 'Barlays',
  url: 'http://www.example.com'
};

const failedState = {
  ...initialState,
  isFetching: false,
  error: 'something went wrong'
};

describe('AtmsReducer', () => {
  test('should return the initial state', () => {
    expect(atms(undefined, {})).toEqual(initialState);
  });

  test('should handle GET_ATMS_REQUESTED', () => {
    expect(
      atms(undefined, {
        type: AtmsActions.GET_ATMS_REQUESTED,
        payload: {
          name: 'Barlays',
          url: 'http://www.example.com'
        }
      })
    ).toEqual(requestedState);

    expect(
      atms(initialState, {
        type: AtmsActions.GET_ATMS_REQUESTED,
        payload: {
          name: 'Barlays',
          url: 'http://www.example.com'
        }
      })
    ).toEqual(requestedState);
  });

  test('should handle GET_ATMS_SUCCESS', () => {
    expect(
      atms(requestedState, {
        type: AtmsActions.GET_ATMS_SUCCESS,
        payload: {
          response: mocksAtmsResponse
        }
      }).atmsCache[requestedState.url]
    ).toBeInstanceOf(Object);
  });

  test('should handle GET_ATMS_FAILED', () => {
    expect(
      atms(undefined, {
        type: AtmsActions.GET_ATMS_FAILED,
        payload: {
          error: 'something went wrong'
        }
      })
    ).toEqual(failedState);

    expect(
      atms(initialState, {
        type: AtmsActions.GET_ATMS_FAILED,
        payload: {
          error: 'something went wrong'
        }
      })
    ).toEqual(failedState);
  });
});
