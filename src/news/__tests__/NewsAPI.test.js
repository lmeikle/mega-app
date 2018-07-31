import { fetchTopHeadlines } from '../NewsAPI';
import mockResponse from './mockResponse.json';

test('fetches headline data successfully', async () => {
  fetch.mockResponseOnce(JSON.stringify(mockResponse));

  let result = await fetchTopHeadlines('canbeanything');
  expect(result.headlines.length).toEqual(mockResponse.articles.length);
});

test('fetches headline data unsuccessfully', async () => {
  const errorMessage = 'foo';
  fetch.mockReject(errorMessage);

  try {
    let result = await fetchTopHeadlines('canbeanything');
  } catch (error) {
    expect(error.message).toEqual('Something went wrong ...');
  }
});
