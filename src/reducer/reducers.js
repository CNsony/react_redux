/**
 * Created by scai051 on 10/24/2017.
 */
import { combineReducers } from 'redux';

// Reducers
import planlist from './actionList';
import loglist from "./logList"
import indexAction from './indexAction'

// Combine Reducers
var reducers = combineReducers({
    planlist: planlist,
    loglist:loglist,
    indexAction:indexAction
});

export default reducers;