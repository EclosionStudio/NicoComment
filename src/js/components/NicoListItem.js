/**
 * Created by tokei on 2017/3/16.
 */

import React, { Component } from 'react';
import MediaLeft from './MediaLeft';
import MediaRight from './MediaRight';

class NicoListItem extends Component {

    render(){
        return(
            <li className="list-group-item">
                <div className="media">
                    <MediaLeft comment = {this.props.comment} />
                    <MediaRight comment = {this.props.comment} />
                </div>
            </li>
        );
    }

}

export default NicoListItem
