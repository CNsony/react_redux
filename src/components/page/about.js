
import React,{Component} from "react"
import {Router, Route, Link} from "react-router-dom"
import {connect} from "react-redux"
import store from "../../reducer/store"




class Index extends Component{
    constructor(props){
        super(props);
    }
    logout(){

    }
    render(){
        return(
            <div>
                
            </div>

        )
    }
}
const mapStateToProps = function(store){
    return{
        
    }
}
export default connect(mapStateToProps)(Index)