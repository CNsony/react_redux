
import React,{Component} from "react"
import {Router, Route, Link} from "react-router-dom"
import {connect} from "react-redux"
import store from "../../reducer/store"


import Imglist from '../component/imgList'
import * as actionMap from '../../action/plan'

import * as request from "../request/request"

class Index extends Component{
    constructor(props){
        super(props);      
    }
    componentDidMount() {
        request.getImg()
    }
    
    render(){
        if(!this.props.indexAction.show){
            return(
            <div className='row'>
                <div className='col-md-12 home-img-box'>
                    <div>Loading...</div>
                </div>
            </div>
            )
        }else{
            return(
            <div className='row'>
                <div className='col-md-12 home-img-box'>
                    <p style={{fontSize:'18px'}}>East Asia Collection</p>
                    <Imglist data={this.props.indexAction.imglist}/>
                </div>
                
            </div>
        )
        }
        
    }
}
const mapStateToProps = function(store){
    return{
        indexAction:store.indexAction
    }
}
export default connect(mapStateToProps)(Index)