import React, { Component } from 'react';
import logo from './loadingSpinner.svg';
import './Loading.css';

const isEmpty = prop =>
  prop === null ||
  prop === undefined ||
  (prop.hasOwnProperty('length') && prop.length === 0) ||
  (prop.constructor === Object && Object.keys(prop).length === 0);

const LoadingSpinner = () => (
  <div>
    <img src={logo} className="loading-spinner" alt="logo" />
  </div>
);

const Loading = loadingProp => WrappedComponent => {
  return class LoadingHOC extends Component {
    componentDidMount() {
      this.startTimer = Date.now();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
      if (!isEmpty(this.props[loadingProp])) {
        this.endTimer = Date.now();
      }
    }

    render() {
      const myProps = {
        loadingTime: ((this.endTimer - this.startTimer) / 1000).toFixed(2)
      };

      return isEmpty(this.props[loadingProp]) ? <LoadingSpinner /> : <WrappedComponent {...this.props} {...myProps} />;
    }
  };
};

export default Loading;
