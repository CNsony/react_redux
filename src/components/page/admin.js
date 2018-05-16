
import React,{Component} from "react"
import {Router, Route, Link} from "react-router-dom"
import {connect} from "react-redux"
import store from "../../reducer/store"






import * as request from '../request/request'

import { Table, Upload, Icon, message,Button } from 'antd';

let file_data_img,file_data_mp4,file_data_x3d;
const props1 = {
    accept:'.jpg',
    name: 'file',
    multiple: false,
    action: '',
    beforeUpload(file,fileList){
           return false; 
    },
    onChange(info) {
      const status = info.file.status;
      if (status !== 'uploading') {
        if(info.fileList.length>1){
            info.fileList.pop()
        }
        
        file_data_img=info.file
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  const props2 = {
    accept:'.avi',
    name: 'file',
    multiple: false,
    action: '',
    beforeUpload(file,fileList){
           return false; 
    },
    onChange(info) {
      const status = info.file.status;
      if (status !== 'uploading') {
        if(info.fileList.length>1){
            info.fileList.pop()
        }
        
        file_data_mp4=info.file
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  const props3 = {
    accept:'.x3d',
    name: 'file',
    multiple: false,
    action: '',
    beforeUpload(file,fileList){
           return false; 
    },
    onChange(info) {
      const status = info.file.status;
      if (status !== 'uploading') {
        if(info.fileList.length>1){
            info.fileList.pop()
        }
        file_data_x3d=info.file
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

   


class Index extends Component{

    
    constructor(props){
        super(props);
        const _this = this;
        this.state={
            x3dData:{},
            imgData:{},
            videoData:{},
            desupdateText:"",
            modalShow:false,
            updateModalShow:false,
            updateText:"",
            updateId:"",
            columns:[{
                title: 'Modal Id',
                dataIndex: 'id',
                key: 'id',
                render(text) {
                  return <a href="#">{text}</a>;
                }
              },{
                title: 'Description',
                dataIndex: 'description',
                key: 'description',
                render(text){
                    return <span dangerouslySetInnerHTML={{__html:text}}></span>
                }
              }, {
                title: 'Operation',
                key: 'operation',
                render(text, record) {
                  return (
                    <span>
                        <a href="#" onClick={_this.showUpdateModal.bind(_this,record.id,record.description)}>Update</a>
                        <span className="ant-divider"></span>
                        <a href="#" onClick={_this.delete_m.bind(_this,record.id)}>Delete</a>
                      
                      
                    </span>
                  );
                }
              }],
              
        }
    }

    
   
    showModal=(e)=>{
        this.setState({
            modalShow:true
        })
    }
    showUpdateModal=(id,des)=>{
        this.setState({
            updateModalShow:true,
            updateText:des,
            updateId:id
        })
    }
    hideModal=(e)=>{
        this.setState({
            modalShow:false
        })
    }
    hideUpdateModal=(e)=>{
        this.setState({
            updateModalShow:false,
            updateText:"",
            updateId:""
        })
    }
    createModal=(e)=>{

        let params = new FormData();
        
        console.log(file_data_x3d,file_data_img,file_data_mp4)
        if(this.state.imgData&&this.state.imgData.length<1){
            message.error('Please uplod a .jpg file')
            return false
        }
        if(this.state.videoData&&this.state.videoData.length<1){
            message.error('Please uplod a .avi file')
            return false
        }
        if(this.state.x3dData&&this.state.x3dData.length<1){
            message.error('Please uplod a .x3d file')
            return false
        }
        if(this.state.desupdateText===""){
            message.error('Please enter description.')
            return false
        }
        params.append('description', this.state.desupdateText);
        params.append('x3d', this.state.x3dData);
        params.append('img', this.state.imgData);
        params.append('video', this.state.videoData);
        request.createModal(params);
        this.setState({
            desupdateText:""
        })
    }
    delete_m=(id)=>{
        let params = {
            "id":id
        }
        request.delete_modal(params);
    }
    updateModal=()=>{
        let data = {
            "id":this.state.updateId,
            'description':this.state.updateText
        }
        
        this.setState({
            updateModalShow:false,
            updateText:"",
            updateId:""
        })

        request.updateModal(data);
    }
    handelChange=(e)=>{
        this.setState({updateText:e.target.value})
    }
    deshandelChange=(e)=>{
        this.setState({desupdateText:e.target.value})
    }
    changeImg=(e)=>{
        this.setState({
            imgData:e.target.files[0]        
        })  
    }
    changeVideo=(e)=>{
        this.setState({
            videoData:e.target.files[0]        
        })  
    }
    changex3d=(e)=>{
        this.setState({
            x3dData:e.target.files[0]        
        })  
    }
    render(){
        return(
            <div>
                <div className='row'>
                    <div className='col-md-10'>
                    </div>
                    <div className='col-md-2'>
                        <div className='admin_top_button' onClick={this.showModal}>Create</div>
                    </div>
                    
                </div>
                <div className='row' style={{'marginTop':"30px"}}>
                   
                    <div className='col-md-12'>
                        <div>
                            <Table columns={this.state.columns} dataSource={this.props.indexAction.imglist} className='table_admin' />
                        </div>
                    </div>
                </div>
                <div className='createBox' style={this.state.modalShow?{display:'block'}:{display:"none"}}>
                    <section className="popup">
                        <div className="pbox" style={{height:'unset'}}>
                            <span className='closeButton' onClick={this.hideModal}>×</span>
                            <div className='modal_box_body col-md-12' style={{marginTop:'20px'}}>
                            <div className='col-md-12' > 
                                <div className='col-md-2' style={{padding:'10px',fontSize:'18px'}}>
                                    Upload a jpg file:
                                </div>
                                <div className='col-md-10'>
                                {/* <Upload {...props1} >
                                    <Button>
                                        <Icon type="upload" /> Upload a .jpg file
                                    </Button>
                                </Upload> */}
                                <input type='file' onChange={this.changeImg} accept="image/jpeg"  style={{border:'0',textIndent:'0'}}/>
                                </div>
                            </div>
                                <div className='col-md-12'>
                                    <div className='col-md-2' style={{padding:'10px',fontSize:'18px'}}>
                                    Upload a avi file:
                                    </div>
                                    <div className='col-md-10'>
                                        {/* <Upload {...props2} >
                                        <Button>
                                            <Icon type="upload" /> Upload a .avi file
                                        </Button>
                                        </Upload> */}
                                        <input type='file' onChange={this.changeVideo} accept="audio/avi, video/avi"  style={{border:'0',textIndent:'0'}}/>
                                    </div>
                            </div>
                            <div className='col-md-12'>
                                    <div className='col-md-2' style={{padding:'10px',fontSize:'18px'}}>
                                    Upload a x3d file:
                                    </div>
                                    <div className='col-md-10'>
                                    {/* <Upload {...props3} >
                                    <Button>
                                        <Icon type="upload" /> Upload a .x3d file
                                    </Button>
                                    </Upload> */}
                                    <input type='file' onChange={this.changex3d} accept="*.x3d" style={{border:'0',textIndent:'0'}}/>
                                </div>
                            </div>
                                
                               
                                <div className='col-md-12'>
                                    <div className='modal_des col-md-2' style={{padding:'10px',fontSize:'18px'}}>Description:</div>
                                    <div className='modal_des col-md-10'><input type='text' style={{width:'100%'}}  value={this.state.desupdateText} onChange={this.deshandelChange}/></div>
                                </div>
                                <div className='col-md-12'>
                                    <div className='submit_button' onClick={this.createModal}>Submit</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className='createBox' style={this.state.updateModalShow?{display:'block'}:{display:"none"}}>
                    <section className="popup">
                        <div className="pbox" style={{height:'unset'}}>
                            <span className='closeButton' onClick={this.hideUpdateModal}>×</span>
                            <div className='modal_box_body col-md-12' style={{marginTop:'20px'}}>
                                <div className='col-md-12'>
                                    <div className='modal_des col-md-2' style={{padding:'10px',fontSize:'18px'}}>Description:</div>
                                    <div className='modal_des col-md-10'><input type='text' style={{width:'100%'}} value={this.state.updateText} onChange={this.handelChange}/></div>
                                </div>
                                <div className='col-md-12'>
                                    <div className='submit_button' onClick={this.updateModal}>Submit</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}
const mapStateToProps = function(store){
    return{
        loglist:store.loglist,
        indexAction:store.indexAction
    }
}
export default connect(mapStateToProps)(Index)