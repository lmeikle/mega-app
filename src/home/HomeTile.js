import React from 'react';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';
import bankingImage from './images/banking.png';
import formsImage from './images/forms.png';
import reactImage from './images/react.png';
import newsImage from './images/news.png';
import responsiveImage from './images/responsive.png';
import miscImage from './images/misc.png';
import uiToolsImage from './images/uitools.png';
import styled, { css } from 'styled-components';

const HomeTileWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 150px;
  height: 150px;
  padding: 5px;
  margin: 10px;
  background-color: #fafafa;
  border: 2px solid ${props => props.theme.primary};
  border-radius: 10px;
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center 10px;
  font-weight: bold;
  font-size: 20px;

  &:hover {
    background-color: #ffffe0;
  }

  div {
    color: ${props => props.theme.primary};
  }

  ${props => {
    switch (props.name) {
      case 'Banking': {
        return bankingMixin;
      }
      case 'Forms': {
        return formsMixin;
      }
      case 'React Playground': {
        return reactPlaygroundMixin;
      }
      case 'News': {
        return newsMixin;
      }
      case 'Responsive': {
        return responsiveMixin;
      }
      case 'Misc': {
        return miscMixin;
      }
      case 'UI Tools': {
        return uitoolsMixin;
      }
      default:
        break;
    }
  }};
`;

const bankingMixin = css`
  background-image: url(${bankingImage});
  background-size: 60%;
  background-position: center 15px;
`;

const formsMixin = css`
  background-image: url(${formsImage});
  background-size: 70%;
  background-position: 30px 10px;
`;

const reactPlaygroundMixin = css`
  background-image: url(${reactImage});
  background-size: 110%;
  background-position: center 0px;
`;

const newsMixin = css`
  background-image: url(${newsImage});
  background-size: 65%;
  background-position: center 15px;
`;

const responsiveMixin = css`
  background-image: url(${responsiveImage});
  background-position: center 4px;
`;

const miscMixin = css`
  background-image: url(${miscImage});
  background-size: 65%;
  background-position: center 15px;
`;

const uitoolsMixin = css`
  background-image: url(${uiToolsImage});
  background-size: 65%;
  background-position: center 15px;
`;

const HomeTile = ({ path, name }) => {
  return (
    <Link to={{ pathname: path }}>
      <HomeTileWrapper name={name}>
        <div>{name}</div>
      </HomeTileWrapper>
    </Link>
  );
};

HomeTile.propTypes = {
  path: string.isRequired,
  name: string.isRequired,
  className: string.isRequired
};

HomeTile.defaultProps = {};

export default HomeTile;
