/**
 * Created by scai051 on 10/20/2017.
 */
import React, { Component } from 'react'
import Plan from "./plan"
import TestRouter from "./router"

import {Router, Route, Link,Switch} from "react-router-dom"
import Login from "../component/login"
class Home extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div>
                <h2>首页</h2>
                <p>这是一个 react 学习的基本操作的小栗子</p>
                <p>通过本次学习可以清楚的掌握， react-router、redux的基本使用方法</p>
                <div>
                    <div>

                        <div>
                            <Link exact="true" to="/">Home</Link>
                        </div>
                        <div>
                            <Link to="/plan">Plan</Link>
                        </div>
                        <div>
                            <Link to='/router'>Route</Link>
                        </div>
                        <Login />
                    </div>
                    <div className="content">
                        <Route path="/plan" component={Plan} />
                        <Route path='/router' component={TestRouter} />

                    </div>
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                </div>
            </div>
        )
    }
}

export default Home