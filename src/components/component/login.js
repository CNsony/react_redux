/**
 * Created by scai051 on 11/12/2017.
 */
import React,{Component} from "react"
import {connect} from "react-redux"
import store  from "../../reducer/store"
import {logout} from "../../action/plan"
import {Link} from "react-router-dom"
class Login extends Component{
    constructor(props){
        super(props);
        console.log(this.props.loglist.iflog);
    }
    logout(){
        store.dispatch(logout())
    }
    render(){
        if(this.props.loglist.iflog){
            return(
                <div>
                    <button onClick={this.logout.bind(this)}>logout</button>
                </div>

            )
        }else{
            return(
                <div>
                    <Link to="/login">Login</Link>
                </div>
            )
        }

    }
}
const mapStateToProps = function(store){
    return{
        loglist:store.loglist
    }
};

export default connect(mapStateToProps)(Login)