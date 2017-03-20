/**
 * Created by tokei on 2017/3/1.
 */

import React, { Component } from 'react';
import CoInputBox from './CoInputBox';
import CoTextArea from './CoTextArea';

class CoButtonIn extends Component {

    handleSubmit(event){
        event.preventDefault();
        console.log('submit');
        //console.log(this.props.commentData);
        //this.props.actions.submitComment(this.props.commentData);
        this.props.actions.handleSubmit(this.props.commentData);
    }

    handleLoad(){
        event.preventDefault();
        this.props.actions.handleLoad();
    }

    render(){
        return(
            <div className="main-comment-box">
                <CoInputBox changeComment = {this.props.actions.changeComment }/>
                <CoTextArea changeComment = {this.props.actions.changeComment }/>
                <button className="btn-submit-comment"
                        onClick={this.handleSubmit.bind(this)}>Submit</button>
                <button className="btn-load-comment"
                        onClick={this.handleLoad.bind(this)}>Load</button>
            </div>

        );
    }

}

export default CoButtonIn

