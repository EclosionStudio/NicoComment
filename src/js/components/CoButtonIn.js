/**
 * Created by tokei on 2017/3/1.
 */

import React, { Component } from 'react';

class CoButtonIn extends Component {

    handleSubmit(event){
        event.preventDefault();
        console.log('submit');
        this.props.submitComment(this.props.commentData.userComBody);
    }

    render(){
        return(
            <button className="btn-submit-comment"
                    onClick={this.handleSubmit.bind(this)}>Submit</button>
        );
    }

}

export default CoButtonIn

