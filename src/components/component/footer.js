
import React,{Component} from "react"
import store from '../../reducer/store'
import Modal from "./modal"
import * as actionList from '../../action/plan'
import { show } from "../../action/plan";
import { connect } from 'react-redux';
 
class Footer extends Component{
    constructor(props){
        super(props);
    }
    show(e){
        let b = this.props.indexAction.showModal;
        if(!b){
            store.dispatch(actionList.showModal({show:!b,id:e.target.id}));
        }
    }
    render(){
        return(
            <div className='App-footer container' onClick={this.show.bind(this)}>
                <span id='1'>References</span>
                <span id='2'>Site Map</span>
                <span id='3'>Originality Statement</span>
                <span id='4'>Download</span>
                <Modal />
            </div>
        )
    }
}
const mapStateToProps = function(store) {
    return {
        indexAction: store.indexAction,
    };
};



export default connect(mapStateToProps)(Footer);