/**
 * Created by scai051 on 10/24/2017.
 */
import * as types from '../action/action_type';

const initialState = {
    show: false, 
    planlist: [] 
};

const galleryReducer = function(state = initialState, action) {
    let list = state.planlist;
    switch(action.type){
        
        // case types.ADD:
        //     list.push(action.item);
        //     return Object.assign({}, state, { planlist: list });
        // // 删除计划
        // case types.DELECT:
        //     let newstate = list.filter((item) => item.id !== action.id);
        //     return Object.assign({}, state, { planlist: newstate });
        // // 显示、隐藏弹出层
        // case types.SHOW:
        //     return Object.assign({}, state, { show: action.show });
    }
    return state;

};
export default galleryReducer