
import * as types from '../action/action_type';
import data from '../data/db'
const initialState = {
    show: false, 
    planlist: data 
};

const planReducer = function(state = initialState, action) {
    let list = state.planlist;
    switch(action.type){
        
        
        case types.SHOW:
            return Object.assign({}, state, { show: action.show });
    }
    return state;

};
export default planReducer
