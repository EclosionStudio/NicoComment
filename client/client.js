/**
 * This is the client for rendering.
 * Created by tokei on 2017/2/27.
 */

import React from 'react';
import { render } from 'react-dom';
import App from '../src/App'

import configureStore from '../src/js/store'
import { Provider } from 'react-redux'

let initialState = {

    comMsg: [{
        id: 0,
        userName: 'NicoYazawa',
        userEmail: 'admin@nekohand.moe',
        userWebsite: 'bla.nekohand.moe',
        userComBody: 'blablablabla'
    }, {
        id: 1,
        userName: 'NicoYazawa25252',
        userEmail: 'reply@nekohand.moe',
        userWebsite: 'reply.nekohand.moe',
        userComBody: 'lOVE'
    }]

};

let store = configureStore(initialState);

render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('app')
);
