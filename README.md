[![Build Status](https://travis-ci.org/lmeikle/mega-app.svg?branch=master)](https://travis-ci.org/lmeikle/mega-app)

After installing the app use 'npm run dev' to run it. (not 'npm start').

The app will launch on http://localhost:3000

- React
- Redux
- Redux Saga
- Centralized Prop Types
- Selectors
- Cached API responses
- Styled Components
- Semantic UI React
- StoryBook JS

# Typescript

    npm install --save-dev typescript awesome-typescript-loader source-map-loader
    npm install --save @types/react @types/react-dom
    node node_modules\typescript\bin\tsc --init

    https://reactjs.org/docs/static-type-checking.html#typescript
    https://github.com/Microsoft/TypeScript-React-Starter/blob/master/tsconfig.json
    https://www.typescriptlang.org/docs/handbook/react-&-webpack.html
    https://github.com/sw-yx/react-typescript-cheatsheet

    defaultProps:
      For stateless function components (SFCs) use ES2015 default initializers for SFCs:
        { name = "world" }: Props

      For Components use static defaultProps and do not mark as optional

    import React, { MouseEvent, ReactNode } from 'react';
    type Props = {
      onClick(e: MouseEvent<HTMLElement>): void
      children?: ReactNode
    }
    const Button = ({ onClick: handleClick, children }: Props) => (
      <button onClick={handleClick}>{children}</button>
    )

    import React, { MouseEvent, SFC } from 'react';
    type Props2 = {
      onClick(e: MouseEvent<HTMLElement>): void
    }
    const Button2:SFC<Props2> = ({ onClick: handleClick, children }) => (
      <button onClick={handleClick}>{children}</button>
    )

# jQuery and jqGrid

- Purely for experimenting with, shouldnt be using them in a React app really.
- jqGrid documents here: http://www.trirand.com/blog/
- Using the Free version though https://github.com/free-jqgrid/jqGrid
- Examples https://www.js-tutorials.com/javascript-tutorial/beautiful-jqgrid-example-demo-using-bootstrap-jquery-ui/

# Testing

- Jest, Enzyme, react-testing-library, jest-dom, Jest Styled Components
- Puppeteer, jest-image-snapshot
- BackstopJS (Not part of Travis yet as need to get it running in a Docker container to avoid issues with different environments/machines.)

# Travis CI

- https://travis-ci.org/lmeikle
- runs all units tests and e2e tests

# Deployed to Firebase

- https://mega-app-99f08.firebaseapp.com
- https://console.firebase.google.com/project/mega-app-99f08/hosting/main

To redeploy:

- npm install -g firebase-tools (if not already installed)
- npm run build
- firebase deploy

# Deployed to AWS by TravisCI

http://lmeikle-mega-app.s3-website.eu-west-2.amazonaws.com
