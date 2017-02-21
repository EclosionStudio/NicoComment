import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

let finalCreateStore = compose(
    applyMiddleware(thunk, logger())
)(createStore);


// rootReducer: return
export default function configureStore(initialState = {userComment: []}){
    return finalCreateStore(rootReducer, initialState);
}