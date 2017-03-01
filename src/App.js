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
        return(
            <div action = {this.props.actions.submitComments}>
                <h1>This is my app</h1>
                <CoInputBox/>
                <CoTextArea/>
                <CoButtonIn/>
                <CoList/>
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