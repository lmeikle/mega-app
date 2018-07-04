import React from 'react';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';
import './Home.css';

const HomeTileComponent = ({ path, name, className }) => {
  return (
    <Link to={{ pathname: path }}>
      <div className={`home-tile ${className}`}>
        <div>{name}</div>
      </div>
    </Link>
  );
};

HomeTileComponent.propTypes = {
  path: string.isRequired,
  name: string.isRequired,
  className: string.isRequired
};

HomeTileComponent.defaultProps = {};

export default HomeTileComponent;
