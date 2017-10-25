/**
 * Created by scai051 on 10/24/2017.
 */
import { combineReducers } from 'redux';

// Reducers
import planlist from './actionList';
import loglist from "./logList"

// Combine Reducers
var reducers = combineReducers({
    planlist: planlist,
    loglist:loglist
});

export default reducers;