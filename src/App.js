import React, { Component } from 'react';
import {Router, Route, Link} from "react-router-dom"

import { Provider, connect } from 'react-redux';
import store from './redux/store'

import logo from './logo.svg';

import Plan from "./components/page/plan"
import Home from "./components/page/home"
import Popup from "./components/page/popup"
import Detail from "./components/page/detail"
import TestRouter from "./components/page/router"
import LogCom from "./components/page/logCom"

import './App.css';
import "./components/css/comment.css"

import createHistory from "history/createBrowserHistory"
const history = createHistory();


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            popupShow:true
        }
    }
  render() {
    return (
        <Provider store = {store}>
            <div className="App">

                <div>
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                    <div>
                        <Router history = {history}>
                            <div className="contentBox">
                                <ul className="nav">
                                    <li>
                                        <Link to="/">首页</Link>
                                    </li>
                                    <li>
                                        <Link to="/plan">计划表</Link>
                                    </li>
                                    <li>
                                        <Link to="/test">二级路由</Link>
                                    </li>
                                </ul>
                                <div className="content">
                                    <Route exact path="/" component={Home}></Route>
                                    <Route path="/plan" component={Plan}></Route>
                                    <Route path="/test" component={TestRouter}></Route>
                                    <Route path="/detail/:id" component={Detail}></Route>
                                </div>
                            </div>
                        </Router>
                    </div>
                    <Popup />
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                    <Home />
                </div>
                <div>
                    <LogCom />
                </div>
            </div>
        </Provider>

    );
  }
}

export default App;
