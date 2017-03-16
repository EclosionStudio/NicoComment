/**
 * Comment List Render.
 * Created by tokei on 2017/3/16.
 */

import React, { Component } from 'react';
import NicoInfoList from './NicoInfoList';
import NicoListItem from './NicoListItem';

class NicoList extends Component {

    render(){
        return(
            <div>
                <h2>Reply Nico <small>ApiVersion: { this.props.serverData.apiVersion}</small></h2>
                <div className="alert alert-info" role="alert">
                    <NicoInfoList infoAddress = { this.props.serverData.address } />
                </div>
                <ul className="list-group">
                    {
                        this.props.serverData.commentBody.map(
                            (comment)=>{
                                return(
                                    <NicoListItem
                                        comment={comment}
                                    />
                                )
                            }
                        )
                    }

                </ul>
            </div>
        );
    }
}

export default NicoList