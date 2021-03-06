import React, { Component } from 'react';
import styled from 'styled-components';
import HomeTile from './HomeTile';
import mega_logo from './images/mega_logo.svg';

const HomeLogo = styled.img`
  height: 50px;
`;

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
        <HomeLogo src={mega_logo} />
        <HomeTitle>What would you like to do today?</HomeTitle>
        <HomeTilesWrapper>
          {config &&
            config
              .filter(entry => entry.name !== 'Home')
              .map(entry => <HomeTile key={entry.name} path={entry.path} name={entry.name} className={entry.className} />)}
        </HomeTilesWrapper>
      </HomeContainer>
    );
  }
}

export default Home;
