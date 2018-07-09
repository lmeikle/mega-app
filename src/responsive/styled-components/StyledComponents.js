import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Item = styled.div`
  flex-grow: 1;
`;

export default class StyledComponents extends Component {
  render() {
    return (
      <Wrapper>
        <Item>
          <h3>Div 1</h3>
        </Item>
        <Item>
          <h3>Div 2</h3>
        </Item>
        <Item>
          <h3>Div 3</h3>
        </Item>
      </Wrapper>
    );
  }
}
