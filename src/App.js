/**
 * App.js Main App
 *
 * Created by tokei on 2017/2/27.
 */

import React, { Component } from 'react';
import CoButtonIn from './js/components/CoButtonIn';
import CoInputBox from './js/components/CoInputBox';
import CoTextArea from './js/components/CoTextArea';
import CoList from './js/components/CoList'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import actions from './js/action'


class App extends Component {

    render(){
        let dataRaw = this.props.comMsg;
        return(
            <div>
                <h1>NicoComment 测试App version Beta</h1>
                <CoInputBox commentData={dataRaw} />
                <CoTextArea commentBody={dataRaw[0].userComBody} />
                <CoButtonIn submitComment = {this.props.actions.submitComment }
                            commentData={dataRaw} />
                <CoList commentData={dataRaw} />
            </div>
        );
    }

}

function mapStateToProps(state){
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);