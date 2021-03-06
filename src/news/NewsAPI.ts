import moment from 'moment';

export async function fetchTopHeadlines(page: number, pageSize: number) {
  try {
    let response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=9927d8eedb684de5802bb4c9269b28ac&pageSize=${pageSize}&page=${page}`
    );

    if (response.ok) {
      return processResponse(await response.json());
    } else {
      throw new Error('Something went wrong ...');
    }
  } catch (error) {
    throw new Error('Something went wrong ...');
  }
}

const processResponse = (response: any) => {
  // create headlines for each article with the data we need
  let headlines = response.articles.map((article: any) => ({
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
