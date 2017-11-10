/**
 * Created by scai051 on 10/22/2017.
 */
import React,{Component}from"react"
import {connect} from "react-redux";
import store from "../../reducer/store"
import Popup from "./popup"
//action
import {show,deletePlan} from "../../action/plan"
class Plan extends Component{
    constructor (props){
        super(props);
        this.state={
            name:"sony"
        }
    }
    show(){
        let b = this.props.planlist.show;
        store.dispatch(show(!b));
    }
    delete(id){
        store.dispatch(deletePlan(id));
    }
    //jump route
    detail(id){
        this.props.history.push(`/detail/${id}`)
    }
    changeName(){
        this.setState({
            name : "cai"
        })
    }
    render(){
        return(
            <div>
                <div className="plant">
                    <h3>计划表</h3>
                    <p onClick={this.show.bind(this)}>添加计划</p>
                </div>
                <table className="planlist">
                    <thead>
                     <tr>
                         <th>标题</th>
                         <th>操作</th>
                     </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.planlist.planlist.map((item,index)=>{
                            return(
                                <tr key={index}>
                                    <td className="plan-title" onClick={this.detail.bind(this,item.id)}>{item.title}</td>
                                    <td className="plan-delect" onClick={this.delete.bind(this,item.id)}>删除</td>
                                </tr>
                            )
                        })
                    }

                    </tbody>
                </table>
                <Popup name={this.state.name}/>
                <button onClick={this.changeName.bind(this)}></button>
            </div>
        )
    }
}
const mapStateToProps = function(store){
    return{
        planlist:store.planlist
    };
}
//connect store as props
export default connect(mapStateToProps)(Plan);