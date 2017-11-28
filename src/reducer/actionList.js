/**
 * Created by scai051 on 10/24/2017.
 */
import * as types from '../action/action_type';
import data from '../data/db'
const initialState = {
    show: false, // 是否显示弹出
    planlist: data // 初始的计划表
};

const planReducer = function(state = initialState, action) {
    let list = state.planlist;
    switch(action.type) {
        // 添加计划
        case types.ADD:
            list.push(action.item);
            console.log(action,"add action")
            return Object.assign({}, state, { planlist: list });
        // 删除计划
        case types.DELECT:
            let newstate = list.filter((item) => item.id != action.id);
            return Object.assign({}, state, { planlist: newstate });
        // 显示、隐藏弹出层
        case types.SHOW:
            return Object.assign({}, state, { show: action.show });
    }
    return state;

};
export default planReducer