/**
 * App.js Main App
 *
 * Created by tokei on 2017/2/27.
 */

import React, { Component } from 'react';
import CoButtonIn from './js/components/CommentBox';
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
                <CoButtonIn actions = { this.props.actions }
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