/**
 * Comment List Render.
 * Created by tokei on 2017/3/16.
 */

import React, { Component } from 'react';
import NicoListHead from './NicoListHead';
import NicoListItem from './NicoListItem';

class NicoList extends Component {

    render(){
        return(
            <div>
                <NicoListHead serverData = { this.props.serverData } />
                <ul className="list-group">
                    {
                        this.props.serverData.commentBody.map(
                            /*react里面对于数组的map 必须传入俩个参数*/
                            (comment, key)=>{
                                return(
                                    <NicoListItem
                                        comment={ comment }
                                        key={ key }
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