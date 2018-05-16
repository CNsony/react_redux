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
            <div className='col-md-12' style={{overflow:"auto"}}>
                {
                        this.props.data.map((item,index)=>{
                            return(
                                <div key={index} className='col-md-3' style={{height:'450px'}}>
                                    <img src={item.img} className='img_box'/>
                                    <div className='img_title' dangerouslySetInnerHTML={{__html:item.description}}></div>
                                </div>
                            )
                        })
                    }
            </div>
        )
    }
}

export default Imglist;