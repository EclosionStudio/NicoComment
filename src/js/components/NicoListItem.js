/**
 * Created by tokei on 2017/3/16.
 */

import React, { Component } from 'react';

class NicoListItem extends Component {

    render(){
        return(
            <li className="list-group-item">
                <div className="media">
                    <div className="media-left">
                        <a href={this.props.comment.forwardWebsite}>
                            <img
                                className="media-object"
                                src="http://tva2.sinaimg.cn/crop.2.0.1237.1237.180/43a59178jw8fb21lytv99j20yi0yd41l.jpg"
                                alt={this.props.comment.forwardWebsite}
                            />
                        </a>
                    </div>
                    <div className="media-body">
                        <h4 className="media-heading">{this.props.comment.nickName}
                        <small>{this.props.comment.uniqueID}</small>
                        </h4>
                        <p>{this.props.comment.comment}</p>
                        <div className="alert alert-success">
                            Email: {this.props.comment.userEmail}
                        </div>
                    </div>
                </div>
            </li>
        );
    }

}

export default NicoListItem
