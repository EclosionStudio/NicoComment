/**
 * Created by tokei on 2017/3/20.
 */
import React, { Component } from 'react';
import NicoInfoList from './NicoInfoList';

class NicoListHead extends Component {

    render(){
        return(
            <div>
                <h2>Reply Nico <small>ApiVersion: { this.props.serverData.apiVersion}</small></h2>
                <div className="alert alert-info" role="alert">
                    <NicoInfoList infoAddress = { this.props.serverData.address } />
                </div>
            </div>
        );
    }

}

export default NicoListHead