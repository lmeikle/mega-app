import React, { Component } from 'react';
import HomeTileComponent from './HomeTileComponent';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-title">What would you like to do today?</div>
        <div className="home-tiles-container">
          <HomeTileComponent path="/banking" name="Banking" className="banking" />
          <HomeTileComponent path="/reactplayground" name="React Playground" className="react-playground" />
        </div>
      </div>
    );
  }
}

export default Home;
