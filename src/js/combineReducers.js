/**
 * combine multiple reducers.
 * Created by tokei on 2017/3/1.
 */

import { combineReducers } from 'redux'
import SubComReducer from './reducers/SubComReducer';
import LoadNicoReducer from './reducers/LoadNicoReducer';

const rootReducer = combineReducers({
    comMsg: SubComReducer,
    serverData: LoadNicoReducer,
});

export default rootReducer;