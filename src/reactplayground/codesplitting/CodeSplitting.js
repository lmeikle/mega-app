import React from 'react';
import Loadable from 'react-loadable';
import { LoadingComponent } from '@lmeikle/my-mono-repo-to-single-package';
import AsyncComponent from './AsyncComponent';

// using react-loadable library
const MyLoadableComponent = Loadable({
  loader: () => import('./OtherComponent'),
  loading: () => <LoadingComponent />
});

// using a HOC
const MyAsyncComponent = AsyncComponent(() => {
  return import('./OtherComponent');
});

const CodeSplitting = () => (
  <div>
    <MyLoadableComponent msg="Loaded using react-loadable library" />
    <MyAsyncComponent msg="Loaded using HOC" />
  </div>
);

export default CodeSplitting;
