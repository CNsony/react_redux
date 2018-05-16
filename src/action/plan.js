
import * as types from './action_type';


export function show(show) {
    return {
        type: types.SHOW,
        show
    };
}


export function getImg(data) {
    return{
        type:types.GET_INDEX_IMG,
        data
    }
}

export function showModal(show,id){
    return {
        type:types.SHOW_MODAL,
        show,
    }
}

export function showAbout(show){
    return {
        type:types.SHOW_ABOUT,
        showAbout
    }
}