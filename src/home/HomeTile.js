import React from 'react';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';
import bankingImage from './images/banking.png';
import formsImage from './images/forms.png';
import reactImage from './images/react.png';
import newsImage from './images/news.jpg';
import styled, { css } from 'styled-components';

const HomeTileWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 200px;
  height: 200px;
  padding: 5px;
  margin: 10px;
  background-color: #fafafa;
  border: 2px solid #002742;
  border-radius: 10px;
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center 10px;
  font-weight: bold;
  font-size: 20px;

  ${props => {
    switch (props.className) {
      case 'banking': {
        return bankingMixin;
      }
      case 'forms': {
        return formsMixin;
      }
      case 'react-playground': {
        return reactPlaygroundMixin;
      }
      case 'news': {
        return newsMixin;
      }
      default:
        break;
    }
  }};
`;

const bankingMixin = css`
  background-image: url(${bankingImage});
  background-size: 60%;
  background-position: center 20px;
`;

const formsMixin = css`
  background-image: url(${formsImage});
  background-size: 70%;
  background-position: center 15px;
`;

const reactPlaygroundMixin = css`
  background-image: url(${reactImage});
  background-size: 110%;
  background-position: center 0px;
`;

const newsMixin = css`
  background-image: url(${newsImage});
`;

const HomeTile = ({ path, name, className }) => {
  return (
    <Link to={{ pathname: path }}>
      <HomeTileWrapper className={`${className}`}>
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
