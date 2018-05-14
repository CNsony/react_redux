import React, { Component } from 'react'
import { connect } from 'react-redux';
import store from '../../reducer/store';
import {showModal} from '../../action/plan';
import img from "../assets/static/siteMap.jpg"


class Modal extends Component{
    constructor (props) {
        super(props);
    }
    componentWillReceiveProps(nextProps) {
        
    }
    // 取消按钮操作
    close () {
        let b = this.props.indexAction.showModal;
        if(b){
            this.setState({
            title: '',
            content: '',
            userId:""
        });
        store.dispatch(showModal(!b));
        }
        
    }

    render() {
        let self = this;
        return (
            <section className="popup" style={this.props.indexAction.showModal ? {} : {display: 'none'}}>
                <div className="pbox">
                    <span className='closeButton' onClick={this.close.bind(this)}>×</span>
                    <div className='modal_box_body'>
                        <div style={this.props.indexAction.modalId==="1" ? {} : {display: 'none'}} className='col-md-12'>
                            <h3>Reference</h3>
                            <p>This is reference content.</p>
                        </div>
                        <div style={this.props.indexAction.modalId==="2" ? {} : {display: 'none'}} className='col-md-12'>
                            <h3>Site Map</h3>
                            <img src={img} style={{'height':'200px'}}/>
                        </div>
                        <div style={this.props.indexAction.modalId==="3" ? {} : {display: 'none'}} className='col-md-12'>
                            <h3>Originality Statement</h3>
                            <p>This is reference content.</p>
                        </div>
                        <div style={this.props.indexAction.modalId==="4" ? {} : {display: 'none'}} className='col-md-12'>
                            <h3>Download</h3>
                            <h4 className='col-md-12'>Select modal to download:</h4>
                            <div className='col-md-12'>
                                <div className='col-md-3'>
                                    <input type='checkbox' value='1' className='model-download'/>
                                    <div className='modal_download_box'>
                                        Model1
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <input type='checkbox' value='1' className='model-download'/>
                                    <div className='modal_download_box'>
                                        Model2
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <input type='checkbox' value='1' className='model-download'/>
                                    <div className='modal_download_box'>
                                        Model3
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <input type='checkbox' value='1' className='model-download'/>
                                    <div className='modal_download_box'>
                                        Model4
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-12' style={{textAlign:'center'}}>
                                <div className='modal_download_button'>
                                    Download
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
        )
    }
}

const mapStateToProps = function(store) {
    return {
        indexAction: store.indexAction,
    };
};


// 连接 store和组件
export default connect(mapStateToProps)(Modal);