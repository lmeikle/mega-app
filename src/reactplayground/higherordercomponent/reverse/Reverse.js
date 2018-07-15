import React from 'react';

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

export default reverse;
