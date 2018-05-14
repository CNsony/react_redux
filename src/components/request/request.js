import axios from '../../config/http'
import store from '../../reducer/store'
import * as actionMap from '../../action/plan'

export function getImg() {
    axios.get("").then((res)=>{
        store.dispatch(actionMap.getImg(res.data));
    }).catch((err)=>{
        let data = [
            {
                imgUrl:"1",
                title:"1"
            },
            {
                imgUrl:"2",
                title:"2"
            }
        ]
        store.dispatch(actionMap.getImg(data));
    })

    
}