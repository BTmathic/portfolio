import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import filtersReducer from '../reducers/filters';
import postsReducer from '../reducers/posts';
import authReducer from '../reducers/auth';
import menuReducer from '../reducers/menu';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
    const store = createStore(
        combineReducers({
            auth: authReducer,
            menu: menuReducer,
            posts: postsReducer,
            filters: filtersReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};