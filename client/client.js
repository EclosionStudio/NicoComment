"use strict";

import React from 'react';
import { render } from 'react-dom';
import App from '../components/App';

import configureStore from '../redux/store'
import { Provider } from 'react-redux';

// data pass in
let initialState = {
    userComment: [{
        userEmail: 'xxx@xxx.com',
        userName: 'xxxxxx',
        website: 'http://xxxx.com'
    }]
};

let store = configureStore(initialState);

render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('app')
);

