/**
 * Created by scai051 on 10/26/2017.
 */
import React,{Component} from "react"
import {Router, Route, Link} from "react-router-dom"
import {connect} from "react-redux"
import store from "../../reducer/store"

import Plan from "./plan"
import Home from "./home"
import Popup from "./popup"
import Detail from "./detail"
import TestRouter from "./router"

import { Upload, Icon, message } from 'antd';
const Dragger = Upload.Dragger;
const props = {
    name: 'file',
    multiple: true,
    action: '//jsonplaceholder.typicode.com/posts/',
    onChange(info) {
      const status = info.file.status;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
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

        this.state={
            baseUrl:'http://127.0.0.1',
            param:{
                fid:0
            }
        }
    }
    
    
    render(){
        return(
            <div>
            <div className='row'>
                <div className='col-md-2'>
                </div>
                <div className='col-md-2'>
                    <div className='admin_top_button'>Upload</div>
                </div>
                <div className='col-md-2'>
                    <div className='admin_top_button'>Create</div>
                </div>
                <div className='col-md-2'>
                    <div className='admin_top_button'>Read</div>
                </div>
                <div className='col-md-2'>
                    <div className='admin_top_button'>Delete</div>
                </div>
                <input type='file' style={{display:'none'}} id='file-upload'/>
            </div>
            <div className='row' style={{'margin-top':"30px"}}>
                <div className='col-md-2'></div>
                <div className='col-md-8'>
                    <div>
                        <Dragger {...props}>
                            <p className="ant-upload-drag-icon">
                            <Icon type="inbox" />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
                        </Dragger>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
const mapStateToProps = function(store){
    return{
        loglist:store.loglist
    }
}
export default connect(mapStateToProps)(Index)