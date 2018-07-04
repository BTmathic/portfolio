import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter, { history } from './routers/AppRouter'

import { addPost } from './actions/posts';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

const store = configureStore();

store.dispatch(addPost({ 
  title: 'Text',
  postBody: 'Testing',
  tags: 'test',
  createdAt: 0 
}));
store.dispatch(addPost({
  title: 'Text2',
  postBody: 'Testing2',
  tags: 'test, testing',
  createdAt: 1
}));
store.dispatch(addPost({
  title: 'Hello World',
  postBody: 'A',
  tags: '',
  createdAt: 2
}))

//const state = store.getState();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));