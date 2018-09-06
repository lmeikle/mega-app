import styled, { css, injectGlobal } from 'styled-components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');
  
  body {
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
  }

  #root {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  #modal-root {
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(1, 1, 1, 0.3);
  }
`;

// https://medium.com/styled-components/styled-components-getting-started-c9818acbcbbd
export const theme = {
  primary: '#002742',
  secondary: '#4183C4'
};

// some global buttons I could use
export const MegaAppButton = styled.button`
  @import url('https://fonts.googleapis.com/css?family=Jim+Nightshade');
  font-family: 'Jim Nightshade', cursive;

  font-size: 1rem;
  border-radius: 5px;
  padding: 0.25rem 1rem;
  margin: 0 1rem;
  background: transparent;
  color: ${props => props.theme.primary};
  border: 2px solid ${props => props.theme.primary};
  ${props =>
    props.primary &&
    css`
      background: ${props => props.theme.primary};
      color: white;
    `};
`;

export const MegaAppBigButton = MegaAppButton.extend`
  height: 3rem;
  font-size: 2rem;
  width: 40vw;
  border-radius: 30px;
`;
