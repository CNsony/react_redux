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
    componentDidMount(){
        document.querySelector(".gallery_modal_button").classList.add("active")
    }

    selectMedia=(e)=>{
        this.setState({
            mediaIndex:e.target.attributes.index.value
        })
    }
    selectModal=(e)=>{
        document.querySelectorAll(".gallery_modal_button").forEach(function(item,index){
            item.classList.remove("active")
        })
        document.querySelectorAll(".gallery_modal_button")[e.target.attributes.index.value].classList.add("active")
        this.setState({
            modalIndex:e.target.attributes.index.value
        })
    }

    view1=()=>{
        console.log(1)
    }
    view2=()=>{
        console.log(2)
    }
    spin=()=>{
        console.log(3)
    }
    light=()=>{
        console.log(4)
    }
    wireframe=()=>{
        console.log(5)
    }
    render(){
        
        return(
            <div className='row'>
                <div className='col-md-8'>
                    <div className='col-md-3'>
                        <div>
                            <h2>Controls</h2>
                            <div className=''>
                                <div className='gallery_view_button' onClick={this.view1}>View1</div>
                                <div className='gallery_view_button' onClick={this.view2}>View2</div>
                                <div className='gallery_view_button' onClick={this.spin}>Spin</div>
                                <div className='gallery_view_button' onClick={this.light}>Light</div>
                                <div className='gallery_view_button' onClick={this.wireframe}>Wireframe</div>
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
                            <img src={this.state.data[this.state.modalIndex].img} />
                            
                            </div>
                            <div className='video_box col-md-12' style={this.state.mediaIndex==="2"?{}:{display:'none'}}>
                            <video width="360" height="410" controls>
                                <source src={this.state.data[this.state.modalIndex].video} type="video/mp4" />
                            </video>
                            </div>
                            <div className='modal_box col-md-12' style={this.state.mediaIndex==="3"?{}:{display:'none'}}>
                            <x3d width='360px' height='410px'>
                            <scene>
                            <inline nameSpaceName="Model" mapDEFToID="true" url={this.state.data[this.state.modalIndex].x3d}> </inline>
                            </scene>
                            </x3d>
                            </div>                            
                        </div>
                    </div>
                    <div className='col-md-3' style={{paddingTop:'13px'}}>
                            <div className='' style={{border:'1px solid #ababab',maxHeight:'500px',overflow:"auto"}} onClick={this.selectModal}>
                                {
                                    this.props.indexAction.imglist.map((item,index)=>{
                                        return (<div className='gallery_modal_button' index={index}>Modal{index+1}</div>)
                                    })
                                }

                                
                                {/* <div className='gallery_modal_button' index='1' style={this.state.modalIndex==="1"?{background:'#50C1E9'}:{}}>Modal2</div>
                                <div className='gallery_modal_button' index='2' style={this.state.modalIndex==="2"?{background:'#50C1E9'}:{}}>Modal3</div>
                                <div className='gallery_modal_button' index='3' style={this.state.modalIndex==="3"?{background:'#50C1E9'}:{}}>Modal4</div> */}
                            </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='' dangerouslySetInnerHTML={{__html:this.state.data[this.state.modalIndex].description}}>
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