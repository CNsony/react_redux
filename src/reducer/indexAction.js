
import * as types from '../action/action_type';
import data from '../data/index_img'

const initialState = {
    show: false, 
    imglist: data, 
    showModal:false,
    modalId:"1",
    showAbout:false
};

const indexAction = function(state = initialState, action) {
    
    switch(action.type){
        
        case types.GET_INDEX_IMG: 
                 
            return Object.assign({}, state, { imglist: action.data, show:true });
        case types.SHOW_MODAL:
            return Object.assign({}, state, { showModal: action.show.show, modalId:action.show.id });
        case types.SHOW_ABOUT:
            return Object.assign({}, state, { showAbout: action.showAbout });
        
    }
    return state
};
export default indexAction
