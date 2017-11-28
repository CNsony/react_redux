/**
 * Created by scai051 on 10/24/2017.
 */
import * as types from "../action/action_type";
import data from "../data/login"
const initialState = {
    iflog : false,
    userInfo : {},

};
const logReducer = function(state = initialState,action){
    let userList = data;
    switch (action.type){
        case types.USER_LOGIN:
            console.log(action.item,action.type,state.iflog);
            let user = userList.filter((item)=>item.Name==action.item.name&&item.userPassWord==action.item.password);
            if(user.length!=0){
                console.log(user)
                return Object.assign({},state,{iflog:true,userInfo:{user:user[0].Name,id:user[0].userId}})
            }
            break;
        case types.USER_LOGOUT:
            console.log(action.item,action.type,state.iflog);
            return Object.assign({},state,{iflog:false,userInfo:{}});
            break;
        default: return state

    }
    return state;
};
export default logReducer