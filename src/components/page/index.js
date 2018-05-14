/**
 * Created by scai051 on 10/26/2017.
 */
import React,{Component} from "react"
import {Router, Route, Link} from "react-router-dom"
import {connect} from "react-redux"
import store from "../../reducer/store"

import Plan from "./plan"
import Home from "./home"
import Popup from "./popup"
import Detail from "./detail"
import TestRouter from "./router"

import Imglist from '../component/imgList'
import axios from '../../config/http'
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
                    <p>East Asia Collection</p>
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