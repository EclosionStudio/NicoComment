import { combineReducers } from 'redux';
import CommentBoxReducer from './CommentBoxReducer';

const rootReducer = combineReducers({
    userComment: CommentBoxReducer,
})

export default rootReducer;