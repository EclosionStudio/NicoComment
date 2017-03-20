/**
 * Created by tokei on 2017/3/20.
 */

import React, { Component } from 'react';
class MediaLeft extends Component {

    render(){
        return(
            <div className="media-left">
                <a href={this.props.comment.forwardWebsite}>
                    <img
                        className="media-object"
                        src="http://tva2.sinaimg.cn/crop.2.0.1237.1237.180/43a59178jw8fb21lytv99j20yi0yd41l.jpg"
                        alt={this.props.comment.forwardWebsite}
                    />
                </a>
            </div>
        );
    }

}

export default MediaLeft