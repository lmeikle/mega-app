[![Build Status](https://travis-ci.org/lmeikle/mega-app.svg?branch=master)](https://travis-ci.org/lmeikle/mega-app)

After installing the app use 'npm run dev' to run it. (not 'npm start').

The app will launch on http://localhost:3000

Some of the things it uses:<br/>
Redux<br/>
Redux Saga<br/>
Centralized Prop Types<br/>
Selectors<br/>
Cached API responses<br/>
Styled Components (not sure if I like it yet, also need to eject to be able to get readable class names)<br/>
redux-forms<br/>
Semantic UI React<br/>
StoryBook JS<br/>
Jest, Enzyme, react-testing-library<br/>
Puppeteer, jest-image-snapshot<br/>
BackstopJS (Not part of Travis yet as need to get it running in a Docker container to avoid issues with different environments/machines<br/>
Git Hooks using husky - prettier on commit<br/>
Travis CI - runs all units tests and e2e tests<br/>
