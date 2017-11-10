/**
 * Created by scai051 on 10/22/2017.
 */
import React,{Component} from "react"
import {Router,Route,NavLink}from "react-router-dom"

const Topic = ({match})=>(
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
);
class TestRouter extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h2>二级路由</h2>
                <ul>
                    <li>
                        <NavLink to={`${this.props.match.url}/rendering`}>
                            使用React渲染
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`${this.props.match.url}/components`}>
                            组件
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`${this.props.match.url}/props-v-state`}>
                            属性 v.状态
                        </NavLink>
                    </li>
                </ul>

                <Route path = {`${this.props.match.url}/:topicId`} component={Topic} />
                <Route exact path = {this.props.match.url} render ={()=>(<h3>请选择一个主题。</h3>)} />
            </div>
        )
    }
}
export default TestRouter