/**
 * Created by scai051 on 10/20/2017.
 */
import React, { Component } from 'react'
import Plan from "./plan"
import index from "./index"
import gallery from "./gallery"
import admin from "./admin"
import about from "./about"
import TestRouter from "./router"

import { Modal, Button } from 'antd';

import {Router, Route, Link,Switch, Redirect} from "react-router-dom"
// import Login from "../component/login"
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { visible: false }
    }

    componentDidMount(){
        let _this = this;
        document.querySelector('body').addEventListener("click",function(){
            _this.setState({
                visible: false,
            });
        })
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = (e) => {
        this.setState({
            visible: false,
        });
    }
    render () {
        return (
            <div>
                <div>
                    <div className='home_link'>

                        <div>
                            <Link exact="true" to="/home" activeClassName="active">Home</Link>
                        </div>
                        <div>
                            <Link to="/gallery" activeClassName="active">Gallery</Link>
                        </div>
                        <div>
                            <Link to="/admin">Admin</Link>
                        </div>
                        <div onClick={this.showModal}>
                            <a>About</a>
                            <div style={this.state.visible?{display:'block'}:{display:'none'}} id='aboutModal'>
                                <div>There are some about virtual museum.</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="content" style={{marginLeft:'-15px',marginRight:'-15px'}}>
                        
                        <Route path="/home" component={index} />
                        <Route path="/gallery" component={gallery} />
                        <Route path="/admin" component={admin} />                      
                        <Route path="/plan" component={Plan} />
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Home