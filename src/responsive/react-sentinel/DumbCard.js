import React, { Component } from 'react';
import classNames from 'classnames';

import './DumbCard.css';

export default class DumbCard extends Component {
  render() {
    const { small, medium, large, children } = this.props;
    const cn = classNames('DumbCard', {
      'is-small': small,
      'is-medium': medium,
      'is-large': large
    });

    return (
      <div className={cn}>
        <div className="DumbCard__content">
          <div className="DumbCard__side-banner" />
          {children}
        </div>
      </div>
    );
  }
}
