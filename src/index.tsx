import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import App from './app/App';
import { configureStore } from './configureStore';
import registerServiceWorker from './registerServiceWorker';
import './semantic-ui-styles.js'; // rather than import 'semantic-ui-css/semantic.min.css'; we only import what we use
import { theme } from './theme/globalStyle';

export const store = configureStore();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      {/**<React.StrictMode>
        <App />
      </React.StrictMode>*/}
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);

registerServiceWorker();
