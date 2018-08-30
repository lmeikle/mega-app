export async function fetchAtmData(url: string) {
  // when running locally we need to proxy the requests through our local server
  if (window.location.hostname === 'localhost') {
    url = 'api/?url=' + url;
  }

  let response = await fetch(url);
  if (response.ok) {
    let json = await response.json();
    if (!json.data) {
      throw new Error('Response is empty');
    }
    return json;
  } else {
    throw new Error('Something went wrong ...');
  }
}
