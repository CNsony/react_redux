
import { combineReducers } from 'redux';

// Reducers
import planlist from './actionList';

import indexAction from './indexAction'
import galleryAction from './galleryAction'
// Combine Reducers
var reducers = combineReducers({
    planlist: planlist,
    indexAction:indexAction,
    galleryAction:galleryAction
});

export default reducers;