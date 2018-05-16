import React, { Component } from 'react';
import {Router, Route,Switch} from "react-router-dom"

import { Provider } from 'react-redux';
import store from './reducer/store'
// import logo from './logo.svg';

import Home from "./components/page/home"

import Footer from './components/component/footer'

import 'antd/dist/antd.css';
import './App.css';
import "./components/css/comment.css"

import createHistory from "history/createBrowserHistory";

const history = createHistory();



class App extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
        <Provider store = {store}>
         <div>
            <div id='backGroundImg'></div>
            <div className="App container">
                <header className="App-header row">
                    {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    <h1 className="App-title">Virtual <br/> Museum</h1>
                </header>    
                <Router history = {history}>
                    <Switch>
                        {/* <Redirect exact from="/" to="/home"/> */}
                        <Route path="/" component={Home} />
                        {/* <Route path="/login" component={LogCom}/>
                        <Route path="/index" component={Index} /> */}

                    </Switch>
                </Router>
                <Footer />
            </div>
           </div> 
        </Provider>
    );
  }
}

export default App;
