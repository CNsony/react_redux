
import React,{Component} from "react"
import {Router, Route, Link} from "react-router-dom"
import {connect} from "react-redux"
import store from "../../reducer/store"

import Plan from "./plan"
import Home from "./home"
import Popup from "./popup"
import Detail from "./detail"
import TestRouter from "./router"

import * as request from '../request/request'

import { Table, Upload, Icon, message } from 'antd';
const Dragger = Upload.Dragger;
let data=[]
const props = {
    name: 'file',
    multiple: true,
    // action: '//jsonplaceholder.typicode.com/posts/',
    onChange(info) {
      const status = info.file.status;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
        data=info.fileList
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
              }, {
                title: 'Operation',
                key: 'operation',
                render(text, record) {
                  return (
                    <span>
                      <a href="#" onClick={_this.delete_m.bind(_this,record.id)}>Delect</a>
                      <span className="ant-divider"></span>
                      <a href="#" onClick={_this.showUpdateModal.bind(_this,record.id,record.description)}>Update</a>
                    </span>
                  );
                }
              }],
              table_data:this.props.indexAction.imglist
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
        let params = [

        ]
        request.createModal(data)
    }
    delete_m=(id)=>{
        request.delete_modal(id);
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
    render(){
        return(
            <div>
                <div className='row'>
                    <div className='col-md-10'>
                    </div>
                    <div className='col-md-2'>
                        <div className='admin_top_button' onClick={this.showModal}>Create</div>
                    </div>
                    {/* <div className='col-md-2'>
                        <div className='admin_top_button'>Upload</div>
                    </div>
                    <div className='col-md-2'>
                        <div className='admin_top_button'>Read</div>
                    </div>
                    <div className='col-md-2'>
                        <div className='admin_top_button'>Delete</div>
                    </div> */}
                </div>
                <div className='row' style={{'margin-top':"30px"}}>
                   
                    <div className='col-md-12'>
                        <div>
                            <Table columns={this.state.columns} dataSource={this.state.table_data} className='table_admin' />
                        </div>
                    </div>
                </div>
                <div className='createBox' style={this.state.modalShow?{display:'block'}:{display:"none"}}>
                    <section className="popup">
                        <div className="pbox" style={{height:'unset'}}>
                            <span className='closeButton' onClick={this.hideModal}>×</span>
                            <div className='modal_box_body col-md-12' style={{marginTop:'20px'}}>
                                
                                <Dragger {...props} >
                                    <p className="ant-upload-drag-icon">
                                    <Icon type="inbox" />
                                    </p>
                                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                    <p className="ant-upload-hint">Please upload three files each with JPG, MP4 and X3D suffix.</p>
                                </Dragger>
                                <div className='col-md-12'>
                                    <div className='modal_des col-md-2' style={{padding:'10px',fontSize:'18px'}}>Description:</div>
                                    <div className='modal_des col-md-10'><input type='text' style={{width:'100%'}}/></div>
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