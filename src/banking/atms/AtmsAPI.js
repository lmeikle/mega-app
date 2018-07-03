export function fetchAtmData(url) {
  // when running locally we need to proxy the requests through our local server
  if (window.location.hostname === 'localhost') {
    url = 'api/?url=' + url;
  }

  return fetch(url)
    .then(response => response.json())
    .then(responseJson => {
      if (!responseJson.data) throw new Error('Response is empty');
      return responseJson;
    });
}
