import moment from 'moment';

export function fetchTopHeadlines(page, pageSize) {
  return fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=9927d8eedb684de5802bb4c9269b28ac&pageSize=${pageSize}&page=${page}`)
    .then(response => response.json())
    .then(responseJson => processResponse(responseJson))
    .catch(error => error);
}

const processResponse = response => {
  // create headlines for each article with the data we need
  let headlines = response.articles.map(article => ({
    title: article.title,
    date: moment(article.publishedAt).format('DD/MM/YYYY'),
    source: article.source.name,
    url: article.url
  }));

  return {
    headlines,
    totalResults: response.totalResults
  };
};
