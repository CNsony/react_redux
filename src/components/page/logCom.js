
import React,{Component} from "react"
import {connect} from "react-redux";
import store from "../../reducer/store"
import {Redirect} from "react-router-dom"

import {login,iflog} from "../../action/plan";

class LogCom extends Component{
    constructor(props){
        super(props);
        // alert("Initial render");
        // alert("constructor");
        this.state = {
            id:"",
            password:"",
            userId:"please enter userid",
            userPassword:"please enter password"
        }
    }
    //在渲染前调用,在客户端也在服务端。
    componentWillMount() {
        // alert("componentWillMount");
    }

    //在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。
    // 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异部操作阻塞UI)。
    componentDidMount() {
        // alert("componentDidMount");
    }

    //该组件就进入了一个running状态，并监视他的props和state以及被移除事件

    //在组件接收到一个新的prop时被调用。这个方法在初始化render时不会被调用。
    componentWillReceiveProps(nextProps) {
        // alert("componentWillReceiveProps");
    }

    //返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。
    //可以在你确认不需要更新组件时使用。
    shouldComponentUpdate(nextProps, nextState) {
        // alert("shouldComponentUpdate");
        return true;        // 记得要返回
    }

    //在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
    componentWillUpdate() {
        // alert("componentWillUpdate");
    }

    //在组件完成更新后立即调用。在初始化时不会被调用。
    componentDidUpdate() {
        // alert("componentDidUpdate");
    }

    //在组件从 DOM 中移除的时候立刻被调用。
    componentWillUnmount() {
        // alert("componentWillUnmount");
    }


    //组件更新方式：
    //1.父组件发生更新
    //2.发生inital render
    //3.this.setState
    //4.this.forceUpdate

    login(){
        this.setState({
            id:"",
            password:""
        });
        store.dispatch(login(this.state));
    }
    handleChange(string,event){
            this.setState({
                [string]:event.target.value
            })
    }

    render(){
        if(this.props.loglist.iflog){
            this.props.history.go(-1);
             //or <Redirect push to="/sample?a=xxx&b=yyy" /> 传递更多参数
        }
        return (
            <div style={this.props.loglist.iflog?{display:"none"}:{}}>
                <div className="log-page">
                    <ComponentTest name = {this.props.name}/>
                    <div>
                        <span>id:</span>
                        <input type="text" onChange={this.handleChange.bind(this,"name")}/>
                    </div>
                    <div>
                        <span>password:</span>
                        <input type="password" onChange={this.handleChange.bind(this,"password")}/>
                    </div>
                    <div>
                        <div onClick={this.login.bind(this)}>login</div>
                    </div>
                </div>

            </div>
        )
    }
}
const mapStateToProps = function(store){
    return{
        loglist:store.loglist
    };
};
function ComponentTest (props){
    return (
        <div>welcome{props.name}</div>
    )
}
export default connect(mapStateToProps)(LogCom);