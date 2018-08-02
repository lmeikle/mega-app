[![Build Status](https://travis-ci.org/lmeikle/mega-app.svg?branch=master)](https://travis-ci.org/lmeikle/mega-app)

After installing the app use 'npm run dev' to run it. (not 'npm start').

The app will launch on http://localhost:3000

# React with Redux

- Redux Saga
- Centralized Prop Types
- Selectors
- Cached API responses
  -redux-forms
- Styled Components (not sure if I like it yet, also need to eject to be able to get readable class names)
- Semantic UI React
- StoryBook JS

# Testing

- Jest, Enzyme, react-testing-library
- Puppeteer, jest-image-snapshot
- BackstopJS (Not part of Travis yet as need to get it running in a Docker container to avoid issues with different environments/machines.

# Git Hooks using husky

- prettier on commit

# Travis CI

- runs all units tests and e2e tests

# Deployed to Firebase

- runs all units tests and e2e tests
- https://mega-app-99f08.firebaseapp.com/news
- https://console.firebase.google.com/project/mega-app-99f08/hosting/main
- just run firebase deploy to redeploy

# Flow (in banking/banks only at present)

- Flow replaces the need for React’s PropTypes.
- You can catch property errors, get autocomplete info, and enforce better typing rules with flow.
- Flow uncovers the same errors PropTypes would, except earlier in the development cycle, not at runtime.
- The only con being you don’t get runtime errors, though some tools make it possible.

- Only add to files where they add value...?
- Seems alot more you can do with redux (https://flow.org/en/docs/react/redux/) but does it just add more boring boiler plate?

- Add to IDE (eg for atom ide-flowtype)
- use jscodeshift to convert all of your components to use Flow types at once?
  or There are some Babel plugins which will generate PropTypes from Flow types such as babel-plugin-react-flow-props-to-prop-types if you want both static and runtime checks
- I have noticed doesnt work properly with redux connected containers.
  tried using flow-typed (flow-typed is a repository of third-party library interface definitions for use with Flow.)<br/>
  npm install -g flow-typed<br/>
  flow-typed install react-redux<br/>
  const connector: Connector<{}, Props> = connect(mapStateToProps);<br/>
  export default connector(BanksContainer);<br/>
  Still didnt work properly so removed it<br/>
