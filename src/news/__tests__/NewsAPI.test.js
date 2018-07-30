import { fetchTopHeadlines } from '../NewsAPI';
import mockResponse from './mockResponse.json';

test('fetches headline data successfully', () => {
  fetch.mockResponseOnce(JSON.stringify(mockResponse));

  fetchTopHeadlines('canbeanything').then(result => {
    expect(result.headlines.length).toEqual(mockResponse.articles.length);
  });
});

test('fetches headline data unsuccessfully', () => {
  const errorMessage = 'foo';
  fetch.mockReject(errorMessage);

  fetchTopHeadlines('canbeanything').then(result => {
    expect(result).toEqual(errorMessage);
  });
});
