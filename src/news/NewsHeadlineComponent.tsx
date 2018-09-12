import React from 'react';
import { IHeadLineProps } from './NewsContainer';
import './News.css';

/**
 * Stateless component which renders a single news headline.
 */
const NewsHeadlineComponent = ({ title, date, source, url }: IHeadLineProps) => {
  return (
    <div className="news-headline">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div data-testid="NewsHeadlineComponent_title" className="news-headline-title">
          {title}
        </div>
      </a>
      <div className="news-headline-date-and-source-container">
        <div className="news-headline-date">{date}</div>
        <div className="news-headline-source">{source}</div>
      </div>
    </div>
  );
};

export default NewsHeadlineComponent;
