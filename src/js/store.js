/**
 * import Middleware
 * Created by tokei on 2017/3/1.
 */

import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './combineReducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk'

let finalCreateStore = compose(
    applyMiddleware(thunk, logger())
)(createStore);

export default function configureStore(initialState = {comMsg:[], serverData:{}}) {
        return finalCreateStore(rootReducer, initialState);
}
