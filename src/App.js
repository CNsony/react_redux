import React, { Component } from 'react';
import {Router, Route, Link,Switch,Redirect} from "react-router-dom"

import { Provider, connect } from 'react-redux';
import store from './reducer/store'

import logo from './logo.svg';

import Index from "./components/page/index"
import Home from "./components/page/home"
import Popup from "./components/page/popup"
import LogCom from "./components/page/logCom"
import TestRouter from "./components/page/router"
import Detail from "./components/page/detail"
import Plan from "./components/page/plan"

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
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <Router history = {history}>
                    <Switch>
                        {/*<Redirect exact from="/" to="/home"/>*/}
                        <Route path="/login" component={LogCom}/>
                        <Route path="/" component={Home} />
                        <Route path="/index" component={Index} />

                    </Switch>
                </Router>
            </div>
        </Provider>
    );
  }
}

export default App;
