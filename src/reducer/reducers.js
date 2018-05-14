/**
 * Created by scai051 on 10/24/2017.
 */
import { combineReducers } from 'redux';

// Reducers
import planlist from './actionList';
import loglist from "./logList"
import indexAction from './indexAction'
import galleryAction from './galleryAction'
// Combine Reducers
var reducers = combineReducers({
    planlist: planlist,
    loglist:loglist,
    indexAction:indexAction,
    galleryAction:galleryAction
});

export default reducers;