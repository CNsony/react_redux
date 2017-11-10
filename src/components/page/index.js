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
            <div>
                <ul className="nav">
                    <li>
                        <Link to={`${this.props.match.url}/2`}>index_2</Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/3`}>index_3</Link>
                    </li>
                    <li>
                        <div onClick={this.logout()}>logout</div>
                    </li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/plan" component={Plan}></Route>
                    <Route path="/test" component={TestRouter}></Route>
                    <Route path="/detail/:id" component={Detail}></Route>
                </div>
                <Popup />
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Home />
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