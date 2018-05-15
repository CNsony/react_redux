/**
 * Created by scai051 on 10/22/2017.
 */
import React,{Component} from "react"

class Imglist extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='col-md-12'>
                {
                        this.props.data.map((item,index)=>{
                            return(
                                <div key={index} className='col-md-3'>
                                    {/* <td className="plan-title" onClick={this.detail.bind(this,item.id)}>{item.title}</td>
                                    <td className="plan-delect">
                                        <span onClick={this.delete.bind(this,item.id)} style={this.props.loglist.userInfo.id == item.userId?{}:{display:"none"}}>Delete</span>
                                        <span onClick={this.edit.bind(this,item.id)}>Edit</span>
                                        <span>Send</span>
                                    </td> */}
                                    <img src={item.img} />
                                    <div className='img_title'>{item.description}</div>
                                </div>
                            )
                        })
                    }
            </div>
        )
    }
}

export default Imglist;