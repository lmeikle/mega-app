import { fetchAtmData } from '../AtmsAPI';
import mocksAtmsResponse from './mockAtmsResponse.json';

describe('testing atms api', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('fetches data for a url for the first time', () => {
    fetch.mockResponseOnce(JSON.stringify(mocksAtmsResponse));

    fetchAtmData('canbeanything').then(res => {
      expect(res.data[0].Brand[0].ATM.length).toEqual(1);
    });

    expect(fetch.mock.calls.length).toEqual(1);
  });

  test('throws error for empty response', () => {
    const errorMessage = 'Response is empty';
    fetch.mockResponseOnce(JSON.stringify({}));

    fetchAtmData('canbeanything').catch(e => {
      expect(e.message).toEqual(errorMessage);
    });

    expect(fetch.mock.calls.length).toEqual(1);
  });
});
