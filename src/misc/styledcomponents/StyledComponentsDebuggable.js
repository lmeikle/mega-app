import React, { Component } from 'react';
import styled from 'styled-components';

// https://medium.freecodecamp.org/how-to-build-a-debuggable-styled-component-10f7e4fbea2

/**const ContentWrapper = styled.div`
  height: 100px;
  box-shadow: 0 0 5px 2px #ccc;
`;

const Img = styled.div`
  display: inline-block;
  width: 100px;
  height: 100%;
  background-size: 100px 100px;
  background-image: url('https://picsum.photos/300/300?image=1062');
`;

const InfoWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  width: calc(100% - 100px);
  height: 100%;
  text-align: left;
`;

const Title = styled.div`
  padding: 2px 0 10px 2px;
  font-size: 28px;
  color: ${props => (props.skyblue ? 'skyblue' : 'black')};
`;

const Description = styled.div`
  padding: 2px;
  font-size: 20px;
  font-style: italic;
  color: #888888;
`;

class StyledComponentsDebuggable extends Component {
  render() {
    return (
      <ContentWrapper>
        <Img />
        <InfoWrapper>
          <Title skyblue>Cute Puppy</Title>
          <Description>Sed ut voluptatem neque cumque. Qui sed ut itaque est doloribus qui. Eos perferendis autem qui fugiat.</Description>
        </InfoWrapper>
      </ContentWrapper>
    );
  }
}

export default StyledComponentsDebuggable;*/

const StyledContent = styled.div`
  height: 100px;
  box-shadow: 0 0 5px 2px #ccc;
  .content__img {
    display: inline-block;
    width: 100px;
    height: 100%;
    background-size: 100px 100px;
    background-image: url('https://picsum.photos/300/300?image=1062');
  }
  .content__info {
    display: inline-block;
    vertical-align: top;
    width: calc(100% - 100px);
    height: 100%;
    text-align: left;
    .content__title {
      padding: 2px 0 10px 2px;
      font-size: 28px;
      color: ${props => (props.skyblue ? 'skyblue' : 'black')};
    }
    .content__description {
      padding: 2px;
      font-size: 20px;
      font-style: italic;
      color: #888888;
    }
  }
`;

class StyledComponentsDebuggable extends Component {
  render() {
    return (
      <StyledContent skyblue="true">
        <div className="content__img" />
        <div className="content__info">
          <div className="content__title" skyblue>
            Cute Puppy
          </div>
          <div className="content__description">
            Sed ut voluptatem neque cumque. Qui sed ut itaque est doloribus qui. Eos perferendis autem qui fugiat.
          </div>
        </div>
      </StyledContent>
    );
  }
}

export default StyledComponentsDebuggable;
