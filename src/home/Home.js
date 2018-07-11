import React, { Component } from 'react';
import styled from 'styled-components';
import HomeTile from './HomeTile';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const HomeTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  padding: 20px 0;
`;

const HomeTilesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: flex-start;
  flex-wrap: wrap;
  height: 100%;
  overflow: auto;
`;

class Home extends Component {
  render() {
    let { config } = this.props;
    return (
      <HomeContainer>
        <HomeTitle>What would you like to do today?</HomeTitle>
        <HomeTilesWrapper>
          {config.filter(entry => entry.name !== 'Home').map(entry => <HomeTile path={entry.path} name={entry.name} className={entry.className} />)}
        </HomeTilesWrapper>
      </HomeContainer>
    );
  }
}

export default Home;
