import React from 'react';
import { string } from 'prop-types';
import './News.css';

/**
 * Stateless component which renders a single news headline.
 */
const NewsHeadlineComponent = ({ title, date, source, url }) => {
  return (
    <div className="news-headline">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="news-headline-title">{title}</div>
      </a>
      <div className="news-headline-date-and-source-container">
        <div className="news-headline-date">{date}</div>
        <div className="news-headline-source">{source}</div>
      </div>
    </div>
  );
};

NewsHeadlineComponent.propTypes = {
  title: string.isRequired,
  date: string.isRequired,
  source: string.isRequired,
  url: string.isRequired
};

NewsHeadlineComponent.defaultProps = {};

export default NewsHeadlineComponent;
