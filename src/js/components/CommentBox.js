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
        this.props.submitComment(this.props.commentData);
    }

    render(){
        return(
            <div>
                <CoInputBox submitComment = {this.props.submitComment }
                            changeComment = {this.props.changeComment }/>
                <CoTextArea changeComment = {this.props.changeComment }/>
                <button className="btn-submit-comment"
                        onClick={this.handleSubmit.bind(this)}>Submit</button>

            </div>

        );
    }

}

export default CoButtonIn

