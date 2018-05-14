import React, { Component } from 'react'
import { connect } from 'react-redux';
import store from '../../reducer/store';
import {showAbout} from '../../action/plan';



class AboutComponent extends Component{
    constructor (props) {
        super(props);
    }
    componentWillReceiveProps(nextProps) {
        
    }
    // 取消按钮操作
    close () {
        let b = this.props.indexAction.showAbout;
        if(b){
        store.dispatch(showAbout(!b));
        }
        
    }

    render() {
        let self = this;
        return (
            <section className="popup" style={this.props.indexAction.showAbout ? {} : {display: 'none'}}>
                <div className="pbox">
                    <span className='closeButton' onClick={this.close.bind(this)}>×</span>
                    <div className='modal_box_body'>
                        <div style={this.props.indexAction.modalId==="1" ? {} : {display: 'none'}} className='col-md-12'>
                            <h3>Reference</h3>
                            <p>This is reference content.</p>
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
export default connect(mapStateToProps)(AboutComponent);