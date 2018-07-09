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
  flex-wrap: wrap;
`;

class Home extends Component {
  render() {
    return (
      <div>
        <HomeTitle>What would you like to do today?</HomeTitle>
        <HomeTilesWrapper>
          <HomeTile path="/banking" name="Banking" className="banking" />
          <HomeTile path="/forms" name="Forms" className="forms" />
          <HomeTile path="/reactplayground" name="React Playground" className="react-playground" />
          <HomeTile path="/news" name="News" className="news" />
          <HomeTile path="/responsive" name="Responsive" className="responsive" />
        </HomeTilesWrapper>
      </div>
    );
  }
}

export default Home;
