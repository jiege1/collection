import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import Router from './router';
import store from './store';

ReactDom.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);
