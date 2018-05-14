/**
 * Created by scai051 on 10/22/2017.
 */
import React,{Component} from "react"
import {connect} from "react-redux";
import store from "../../reducer/store"


class Imgbox extends Component{
    constructor(props){
        super(props);
        let item = this.props.indexImgList.imglist;
        this.state = {
            plan:item
        }
    }
    render(){
        return(
            <div className='col-md-12'>
                {
                this.state.plan.map((obj)=>{
                    return 
                })
                }
            </div>
        )
    }
}
const mapStateToProps = function(store){
    return{
        indexImgList:store.indexImgList
    }
}
export default connect(mapStateToProps)(Imgbox);