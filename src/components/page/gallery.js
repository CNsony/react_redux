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

class Index extends Component{
    constructor(props){
        super(props);
    }
    logout(){

    }
    render(){
        return(
            <div className='row'>
                <div className='col-md-6'>
                    <div className='col-md-3'>
                        <div>
                            <h3>Controls</h3>
                            <div className=''>
                                <div className='gallery_view_button'>View1</div>
                                <div className='gallery_view_button'>View2</div>
                                <div className='gallery_view_button'>Spin</div>
                                <div className='gallery_view_button'>Light</div>
                                <div className='gallery_view_button'>Wireframe</div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div>
                            <div></div>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                    <div className='col-md-3'>

                    </div>
                </div>
                <div className='col-md-6'>

                </div>
            </div>

        )
    }
}
const mapStateToProps = function(store){
    return{
        loglist:store.loglist
    }
}
export default connect(mapStateToProps)(Index)