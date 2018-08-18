import React from 'react';
import Child from './Child';
import ErrorBoundary from '../../shared/components/errorboundary/ErrorBoundary';
const Parent = () => (
  <div>
    <h1>Parent</h1>
    <ErrorBoundary>
      <Child />
    </ErrorBoundary>
  </div>
);
export default Parent;
