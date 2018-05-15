/**
 * Created by scai051 on 10/26/2017.
 */
import React,{Component} from "react"
import {Router, Route, Link} from "react-router-dom"
import {connect} from "react-redux"
import store from "../../reducer/store"

class Index extends Component{
    constructor(props){
        super(props);
        this.state={
            mediaIndex:"1",
            modalIndex:"0",
            controlView1:false,
            controlView2:false,
            controlSpin:false,
            controlLight:false,
            controlWireframe:false,
            data:this.props.indexAction.imglist
            
        }
    }

    selectMedia=(e)=>{
        this.setState({
            mediaIndex:e.target.attributes.index.value
        })
    }
    selectModal=(e)=>{
        this.setState({
            modalIndex:e.target.attributes.index.value
        })
    }
    render(){
        
        return(
            <div className='row'>
                <div className='col-md-8'>
                    <div className='col-md-3'>
                        <div>
                            <h2>Controls</h2>
                            <div className=''>
                                <div className='gallery_view_button'>View1</div>
                                <div className='gallery_view_button'>View2</div>
                                <div className='gallery_view_button'>Spin</div>
                                <div className='gallery_view_button'>Light</div>
                                <div className='gallery_view_button'>Wireframe</div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='row' style={{border:'1px solid #ababab',marginTop:'13px'}} onClick={this.selectMedia}>
                            <div className='media_select col-md-4' index='1' style={this.state.mediaIndex==="1"?{background:'#50C1E9'}:{}}>
                                Picture
                            </div>
                            <div className='media_select col-md-4' index='2' style={this.state.mediaIndex==="2"?{background:'#50C1E9'}:{}}>
                                Video
                            </div>
                            <div className='media_select col-md-4' index='3' style={this.state.mediaIndex==="3"?{background:'#50C1E9'}:{}}>
                                3D Modal
                            </div>
                        </div>
                        <div className='row' id='media_box'>
                            <div className='pic_box col-md-12' style={this.state.mediaIndex==="1"?{}:{display:'none'}}>
                            {this.state.data[this.state.modalIndex].img}
                            </div>
                            <div className='video_box col-md-12' style={this.state.mediaIndex==="2"?{}:{display:'none'}}>
                            {this.state.data[this.state.modalIndex].video}
                            </div>
                            <div className='modal_box col-md-12' style={this.state.mediaIndex==="3"?{}:{display:'none'}}>
                            {this.state.data[this.state.modalIndex].x3d}
                            </div>                            
                        </div>
                    </div>
                    <div className='col-md-3' style={{paddingTop:'13px'}}>
                            <div className='' style={{border:'1px solid #ababab'}} onClick={this.selectModal}>
                                {
                                    this.props.indexAction.imglist.map((item,index)=>{
                                        return (<div className='gallery_modal_button' index={index} style={this.state.modalIndex==="0"?{background:'#50C1E9'}:{}}>Modal{index+1}</div>)
                                    })
                                }

                                
                                {/* <div className='gallery_modal_button' index='1' style={this.state.modalIndex==="1"?{background:'#50C1E9'}:{}}>Modal2</div>
                                <div className='gallery_modal_button' index='2' style={this.state.modalIndex==="2"?{background:'#50C1E9'}:{}}>Modal3</div>
                                <div className='gallery_modal_button' index='3' style={this.state.modalIndex==="3"?{background:'#50C1E9'}:{}}>Modal4</div> */}
                            </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className=''>
                        {this.state.data[this.state.modalIndex].description}
                    </div>
                </div>
            </div>

        )
    }
}
const mapStateToProps = function(store){
    return{
        galleryList:store.galleryList,
        indexAction:store.indexAction
    }
}
export default connect(mapStateToProps)(Index)