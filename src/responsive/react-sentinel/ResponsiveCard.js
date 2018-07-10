import React, { Fragment, Component } from 'react';
import Sentinel from 'react-sentinel';

import DumbCard from './DumbCard';

import './ResponsiveCard.css';

const LargeContent = ({ width }) => (
  <Fragment>
    <h1 className="ResponsiveCard__title">Looping and setting props made easy</h1>
    <h2 className="ResponsiveCard__subtitle">Current Width: {width}px</h2>
    <p className="ResponsiveCard__tidbit">
      You can use Sentinel for basically any usecase you would want to use requestAnimationFrame for. Including Element Queries, and even Animations.
    </p>
  </Fragment>
);

const MediumContent = ({ width }) => (
  <Fragment>
    <h1 className="ResponsiveCard__title">Efficient out of the box</h1>
    <h2 className="ResponsiveCard__subtitle">Current Width: {width}px</h2>
    <p className="ResponsiveCard__tidbit">
      Sentinel will automatically shallow compare what you return, and will only update the wrapped component if something actually changes.
    </p>
    <p className="ResponsiveCard__tidbit">
      if requestAnimationFrame is too heavy for you, setting the <code>lowPriority</code> prop will loop using requestIdleCallback!
    </p>
  </Fragment>
);

const SmallContent = ({ width }) => (
  <Fragment>
    <h1 className="ResponsiveCard__title">Thats it, just trying to keep it simple here.</h1>
    <h2 className="ResponsiveCard__subtitle">Current Width: {width}px</h2>
    <p className="ResponsiveCard__tidbit is-bold">There are definitely other ways of doing Element Queries and Animations.</p>
    <p className="ResponsiveCard__tidbit">
      I often found myself writing requestAnimationFrame loops and hated it, so I decided to make it easier for myself and share it with all of you
    </p>
  </Fragment>
);

export default class ResponsiveCard extends Component {
  getSize = () => {
    const width = this.container.offsetWidth;
    if (width < 300) {
      return {
        large: false,
        medium: false,
        small: true,
        width
      };
    }

    if (width < 425) {
      return {
        large: false,
        medium: true,
        small: false,
        width
      };
    }

    return { large: true, medium: false, small: false, width };
  };

  renderCard = ({ small, medium, large, width }) => (
    <DumbCard small={small} medium={medium} large={large}>
      <div className="ResponsiveCard__content">
        {small && <SmallContent width={width} />}
        {medium && <MediumContent width={width} />}
        {large && <LargeContent width={width} />}
      </div>
    </DumbCard>
  );

  render() {
    return (
      <div className="ResponsiveCard" ref={el => (this.container = el)}>
        <Sentinel observe={this.getSize} render={this.renderCard} />
      </div>
    );
  }
}
