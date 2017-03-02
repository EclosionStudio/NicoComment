/**
 * CommentListItem
 * Created by tokei on 2017/3/1.
 */

import React, { Component } from 'react';

class CoListItem extends Component {

    render(){
        return(
                    <li>
                        <span>Email: {this.props.comment.userEmail} </span><br />
                        <span>Name: {this.props.comment.userName} </span><br />
                        <span>Website: {this.props.comment.userWebsite} </span><br />
                        <span>Comment: {this.props.comment.userComBody}</span><br />
                    </li>

        );
    }

}

export default CoListItem