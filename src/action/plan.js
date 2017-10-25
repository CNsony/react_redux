/**
 * Created by scai051 on 10/24/2017.
 */
import * as types from './action_type';
//create action and return it
// 添加计划
export function addPlan(item) {
    return {
        type: types.ADD,
        item
    };
}
// 删除计划
export function deletePlan(id) {
    return {
        type: types.DELECT,
        id
    };
}
// 显示隐藏弹层
export function show(show) {
    return {
        type: types.SHOW,
        show
    };
}

export function login(item) {
    return{
        type:types.USER_LOGIN,
        item
    }
}
export function logout() {
    return{
        type:types.USER_LOGOUT
    }
}

