/**
 * combine multiple reducers.
 * Created by tokei on 2017/3/1.
 */

import { combineReducers } from 'redux'
import SubComReducer from './reducers/SubComReducer';

const rootReducer = combineReducers({
    comMsg: SubComReducer,
});

export default rootReducer;