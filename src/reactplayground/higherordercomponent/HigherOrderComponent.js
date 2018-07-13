import React, { Component } from 'react';

const reverse = PassedComponent => ({ children, ...props }) => {
  return (
    <PassedComponent {...props}>
      {children
        .split('')
        .reverse()
        .join('')}
    </PassedComponent>
  );
};

const name = props => <span>{props.children}</span>;

const ReversedName = reverse(name);

//https://medium.com/@soorajchandran/introduction-to-higher-order-components-hoc-in-react-383c9343a3aa
const HigherOrderComponent = props => {
  return <ReversedName>Hello</ReversedName>;
};

export default HigherOrderComponent;
