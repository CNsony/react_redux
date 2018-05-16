// import _axios from '../../config/http'
import store from '../../reducer/store'
import * as actionMap from '../../action/plan'
import qs from 'qs'

import $axios from 'axios'

export function getImg() {
    let config = {
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
    $axios.get("http://localhost:80/web_3D_app/index.php/index/index/findAll",config).then((res)=>{
        store.dispatch(actionMap.getImg(res.data));
    }).catch((err)=>{
        console.error(err)
    })
}

export function createModal(param){
    let config = {
        headers: {
        'Content-Type': 'multipart/form-data'
        }
    }
        $axios.post('http://localhost:80/web_3D_app/index.php/index/index/create', param, config).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.error(err)
        })


    // axios.post("/web_3D_app/index.php/index/index/create",param).then((res)=>{
    //     console.log(res)
    // }).catch((err)=>{
    //     console.error(err)
    // })
}

export function delete_modal (id){
    let config = {
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
    $axios.post("http://localhost:80/web_3D_app/index.php/index/index/delete",qs.stringify(id),config).then((res)=>{
       if(res.status===200){
            getImg()
       }
    }).catch((err)=>{
        console.error(err)
    })
}

export function updateModal(params){
    let config = {
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
    $axios.post("http://localhost:80/web_3D_app/index.php/index/index/update",qs.stringify(params),config).then((res)=>{
        if(res.status===200){
            getImg()
        }
    }).catch((err)=>{
        console.error(err)
    })
}