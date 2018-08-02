
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import ShoppingPreferences from './Components/ShoppingPreferences/ShoppingPreferences';
import allReducers from './reducers';
import logger from 'redux-logger';

const store = createStore(
    allReducers,
    applyMiddleware(logger)
);

ReactDOM.render(
<Provider store={store}>
    <ShoppingPreferences />
</Provider>, document.getElementById('root'));

