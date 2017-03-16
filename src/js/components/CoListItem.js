/**
 * CommentListItem
 * Created by tokei on 2017/3/1.
 */

import React, { Component } from 'react';

class CoListItem extends Component {

    render(){
        return(
                    <li className="list-group-item">
                        <div className="media">
                            <div className="media-left">
                                <a href="#">
                                    <img className="media-object"
                                         src="http://tva2.sinaimg.cn/crop.2.0.1237.1237.180/43a59178jw8fb21lytv99j20yi0yd41l.jpg"
                                         alt={this.props.comment.userWebsite}
                                    />
                                </a>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">{this.props.comment.userName}
                                <small>{this.props.comment.userWebsite}</small>
                                </h4>
                                <p>{this.props.comment.userComBody}</p>
                                <div className="alert alert-success">
                                    Email: {this.props.comment.userEmail}
                                </div>
                            </div>
                        </div>

                    </li>

        );
    }

}

export default CoListItem