/**
 * Created by tokei on 2017/3/17.
 */
import React, { Component } from 'react';


class NicoInfoList extends Component {

    render(){
        return(
            <ul className="list-group">
                <li className="list-group-item">
                    <span><strong>RootAddress:</strong>  { this.props.infoAddress.adminAddress } </span>
                </li>
                <li className="list-group-item">
                    <span><strong>RootAddressPath:</strong> { this.props.infoAddress.path }</span>
                </li>
                <li className="list-group-item">
                    <span><strong>RootAddressSecret:</strong> { this.props.infoAddress.serverID }</span>
                </li>
            </ul>
        );
    }

}

export default NicoInfoList