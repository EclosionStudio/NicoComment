'use strict';

import React, { Component } from 'react';
import CommentBox from './commentBox/CommentBox';
import CommentTree from './commentTree/CommentTree';

// alt + F12
// {/* A JSX comment */}

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from '../redux/actions/CommentBoxActions'


class App extends Component {

    render(){
        return(
            <div>
                {/* Comment Box */}
                <CommentBox actions={this.props.actions} userComment={ this.props.userComment }/>
                {/* Comment Tree */}
                <CommentTree />
                <footer> This is real NicoNicoNi Comment! </footer>
            </div>
        );
    }

}

// export default App;
function mapStateToProps(state){

    return state;
}

function mapDispatchToProps(dispatch){

    return{
        actions: bindActionCreators(actions, dispatch)
    }

}
// It is annoying to add dispatch to every item.
export default connect(mapStateToProps, mapDispatchToProps)(App);