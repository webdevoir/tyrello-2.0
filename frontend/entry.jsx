import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { logout } from './actions/session_actions';




document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  // TEST ///
  window.logout = logout;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  //

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});