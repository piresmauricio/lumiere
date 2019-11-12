import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/reactotronConfig';

import Routes from './routes';
import history from './service/history';
import GlobalStyle from './styles/global';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}

export default App;
