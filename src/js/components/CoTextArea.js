/**
 * Comment Text Box
 * Created by tokei on 2017/3/1.
 */

import React, { Component } from 'react';

class CoTextArea extends Component {

    changeText(event){
        this.props.changeComment(event.target.value, 'userComBody');

    }

    render(){
        return(
            <div>
                <textarea className="comment-body"
                        onChange= {this.changeText.bind(this)} >

                </textarea>
            </div>
        );
    }

}

export default CoTextArea