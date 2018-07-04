import React from 'react';
import Loadable from 'react-loadable';
import LoadingComponent from '../../shared/loading/LoadingComponent';

const LoadableOtherComponent = Loadable({
  loader: () => import('./OtherComponent'),
  loading: () => <LoadingComponent />
});

const CodeSplitting = () => <LoadableOtherComponent />;

export default CodeSplitting;
