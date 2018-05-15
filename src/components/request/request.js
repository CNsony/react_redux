import axios from '../../config/http'
import store from '../../reducer/store'
import * as actionMap from '../../action/plan'

export function getImg() {
    axios.get("/web_3D_app/public/index.php/index/index/findAll").then((res)=>{
        store.dispatch(actionMap.getImg(res.data));
    }).catch((err)=>{
        console.error(err)
    })
}

export function createModal(param){
    axios.post("/web_3D_app/public/index.php/index/index/create",param).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.error(err)
    })
}

export function delete_modal (id){
    axios.post("/web_3D_app/public/index.php/index/index/delete",{"id":id}).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.error(err)
    })
}

export function updateModal(date){
    axios.post("/web_3D_app/public/index.php/index/index/update",date).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.error(err)
    })
}