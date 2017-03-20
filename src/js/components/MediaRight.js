/**
 * Created by tokei on 2017/3/20.
 */

import React, { Component } from 'react';

class MediaRight extends Component {

    render(){
        return(
            <div className="media-body">
                <h4 className="media-heading">{this.props.comment.nickName}
                    <small>{this.props.comment.uniqueID}</small>
                </h4>
                <p>{this.props.comment.comment}</p>
                <div className="alert alert-success">
                    Email: {this.props.comment.userEmail}
                </div>
            </div>
        );
    }

}

export default MediaRight
