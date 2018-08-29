[![Build Status](https://travis-ci.org/lmeikle/mega-app.svg?branch=master)](https://travis-ci.org/lmeikle/mega-app)

After installing the app use 'npm run dev' to run it. (not 'npm start').

The app will launch on http://localhost:3000

- React
- Redux
- Redux Saga
- Centralized Prop Types
- Selectors
- Cached API responses
  -redux-forms
- Styled Components (not sure if I like it yet, also need to eject to be able to get readable class names)
- Semantic UI React
- StoryBook JS
- SlateJS/DraftJS

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

# Flow (in banking/banks only at present) REMOVED AND REPLACED WITH TYPESCRIPT

- Flow replaces the need for React’s PropTypes.
- You can catch property errors, get autocomplete info, and enforce better typing rules with flow.
- Flow uncovers the same errors PropTypes would, except earlier in the development cycle, not at runtime.
- The only con being you don’t get runtime errors, though some tools make it possible.

- Get type errors simply by adding @flow to the top of the document (don't need to add any annotations)
- The errors are shown in the IDE if you install plugins, or by running flow. (eg for atom ide-flowtype)

- Only add to files where they add value...?
- Seems alot more you can do with redux (https://flow.org/en/docs/react/redux/) but does it just add more boring boiler plate?
- use jscodeshift to convert all of your components to use Flow types at once?
  or There are some Babel plugins which will generate PropTypes from Flow types such as babel-plugin-react-flow-props-to-prop-types if you want both static and runtime checks
- I have noticed doesnt work properly with redux connected containers.
  tried using flow-typed (flow-typed is a repository of third-party library interface definitions for use with Flow.)<br/>
  npm install -g flow-typed<br/>
  flow-typed install react-redux<br/>
  const connector: Connector<{}, Props> = connect(mapStateToProps);<br/>
  export default connector(BanksContainer);<br/>
  Still didnt work properly so removed it<br/>

# Testing

- Jest, Enzyme, react-testing-library
- Puppeteer, jest-image-snapshot
- BackstopJS (Not part of Travis yet as need to get it running in a Docker container to avoid issues with different environments/machines.

# Git Hooks using husky

- prettier on commit

# Travis CI

- runs all units tests and e2e tests

# Deployed to Firebase

- https://mega-app-99f08.firebaseapp.com
- https://console.firebase.google.com/project/mega-app-99f08/hosting/main

To redeploy:

- npm install -g firebase-tools (if not already installed)
- npm run build
- firebase deploy
