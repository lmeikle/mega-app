import * as React from 'react';
import { LoadingComponent } from '@lmeikle/my-mono-repo-to-single-package';
import { fetchTopHeadlines } from './NewsAPI';
import NewsHeadlineComponent from './NewsHeadlineComponent';

type IProps = {};

type IState = {
  totalResults: number;
  headlines: Array<IHeadLineProps>;
  error?: string;
};

export type IHeadLineProps = {
  title: string;
  date: string;
  source: string;
  url: string;
};

/**
 * Renders a list of top news headlines
 */
class NewsContainer extends React.Component<IProps, IState> {
  state: IState = {
    totalResults: 0,
    headlines: []
  };

  static get PAGE_SIZE() {
    return 5;
  }

  componentDidMount() {
    this.showMore();
  }

  showMore = async () => {
    const { totalResults, headlines } = this.state;
    let page = ((headlines.length / totalResults) * totalResults) / NewsContainer.PAGE_SIZE;

    try {
      const result = await fetchTopHeadlines(page + 1, NewsContainer.PAGE_SIZE);
      this.setState({
        headlines: [...this.state.headlines, ...result.headlines],
        totalResults: result.totalResults
      });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { headlines, totalResults, error } = this.state;

    if (error) {
      return <div className="errorMessage">Failed to get top headlines due to: {error.toString()}</div>;
    }

    if (totalResults === 0) {
      return <LoadingComponent />;
    }

    return (
      <div className="news-container">
        <div className="news-title">News</div>
        <div className="news-headlines-container">
          {headlines.map(headline => (
            <NewsHeadlineComponent key={headline.title} {...headline} />
          ))}
        </div>
        {headlines.length < totalResults && (
          <div className="news-show-more-button" onClick={this.showMore}>
            Show More
          </div>
        )}
        <div className="news-powered-by">
          <a href="https://newsapi.org" target="_blank" rel="noopener noreferrer">
            Powered by News API
          </a>
        </div>
      </div>
    );
  }
}

export default NewsContainer;
