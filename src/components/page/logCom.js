/**
 * Created by scai051 on 10/24/2017.
 */
import React,{Component} from "react"
import {connect} from "react-redux";
import store from "../../redux/store"

import {login,logout,iflog} from "../../action/plan";

class LogCom extends Component{
    constructor(props){
        super(props);
        this.state = {
            id:"",
            password:"",
            userId:"please enter userid",
            userPassword:"please enter password"
        }
    }
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
        return (
            <div style={this.props.loglist.iflog?{display:"none"}:{}}>
                <div className="log-page">
                    <div>
                        <span>id:</span>
                        <input type="text" onChange={this.handleChange.bind(this,"id")}/>
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
}
export default connect(mapStateToProps)(LogCom);