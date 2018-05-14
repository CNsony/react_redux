/**
 * Created by scai051 on 10/24/2017.
 */
import * as types from '../action/action_type';
import data from '../data/index_img'
import axios from '../config/http'
const initialState = {
    show: false, // 是否显示弹出
    imglist: data, // 初始的计划表
    showModal:false,
    modalId:"1",
    showAbout:false
};

const indexAction = function(state = initialState, action) {
    
    switch(action.type){
        // 添加计划
        case types.GET_INDEX_IMG:           
            return Object.assign({}, state, { imglist: action.data, show:true });
        case types.SHOW_MODAL:
            return Object.assign({}, state, { showModal: action.show.show, modalId:action.show.id });
        case types.SHOW_ABOUT:
            return Object.assign({}, state, { showAbout: action.showAbout });
        // 删除计划
        // case types.DELECT:
        //     let newstate = list.filter((item) => item.id !== action.id);
        //     return Object.assign({}, state, { planlist: newstate });
        // // 显示、隐藏弹出层
        // case types.SHOW:
        //     return Object.assign({}, state, { show: action.show });
    }
    return state
};
export default indexAction
