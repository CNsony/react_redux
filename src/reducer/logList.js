/**
 * Created by scai051 on 10/24/2017.
 */
import * as types from "../action/action_type";
import data from "../data/login"
const initialState = {
    iflog : false,
    userInfo : data
};
const logReducer = function(state = initialState,action){
    let userInfo = state.userInfo;
    switch (action.type){
        case types.USER_LOGIN:

            let user = userInfo.filter((item)=>item.userId==action.item.id&&item.userPassWord==action.item.password);
            if(user.length!=0){
                return Object.assign({},state,{iflog:true})
            }
            break;
        case types.USER_LOGOUT:
            console.log(action.item,action.type);
            break;
        default: return state

    }
    return state;
};
export default logReducer