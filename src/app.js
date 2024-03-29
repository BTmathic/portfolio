import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter, { history } from './routers/AppRouter'

import { startSetPosts } from './actions/posts';
import { login, logout } from './actions/auth';
import LoadingPage from './components/LoadingPage';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    setTimeout(() => {
      store.dispatch(startSetPosts()).then(() => {
      ReactDOM.render(jsx, document.getElementById('app'));
      hasRendered = true;
    })}, 3000);
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    if (user.email === 'mathic@gmail.com') {
      store.dispatch(login(user.uid));
    }
    renderApp();
    if (history.location.pathname === '/login') {
      history.push('/blog');
    }
  } else {
    store.dispatch(logout());
    renderApp();
  }
});