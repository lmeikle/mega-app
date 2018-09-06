import React, { Component } from 'react';
import styled from 'styled-components';
import { MegaAppButton, MegaAppBigButton } from '../../theme/globalStyle';

const Underline = styled.span`
  border-bottom: 4px solid ${props => props.theme.secondary};
`;

class StyledComponents extends Component {
  render() {
    return (
      <div>
        <MegaAppButton>Normal Button</MegaAppButton>
        <br />
        <br />
        <MegaAppButton primary>Primary Button</MegaAppButton>
        <br />
        <br />
        <MegaAppBigButton primary>Primary BigButton</MegaAppBigButton>
        <br />
        <br />
        <Underline>Some underlined text</Underline>
      </div>
    );
  }
}

export default StyledComponents;
