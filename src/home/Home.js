import React, { Component } from 'react';
import styled from 'styled-components';
import HomeTile from './HomeTile';

const HomeTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  padding: 20px 0;
`;

const HomeTilesWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

class Home extends Component {
  render() {
    return (
      <div className="home">
        <HomeTitle>What would you like to do today?</HomeTitle>
        <HomeTilesWrapper>
          <HomeTile path="/banking" name="Banking" className="banking" />
          <HomeTile path="/reactplayground" name="React Playground" className="react-playground" />
        </HomeTilesWrapper>
      </div>
    );
  }
}

export default Home;
