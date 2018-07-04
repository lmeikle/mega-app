import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HomeTileComponent from './HomeTileComponent';
import './Home.css';
import bankingLogo from './images/banking.png';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-title">What would you like to do today?</div>
        <div className="home-tiles-container">
          <HomeTileComponent path="/banking" name="Banking" className="banking" />
        </div>
      </div>
    );
  }
}

export default Home;
