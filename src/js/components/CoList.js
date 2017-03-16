/**
 * Comment List
 * Created by tokei on 2017/3/1.
 */

import React, { Component } from 'react';
import CoListItem from './CoListItem'

class CoList extends Component {

    render(){
        return(

                <ul className="list-group">
                    {
                        this.props.commentData.map(
                            (comment) => {
                                return <CoListItem  key={comment.id}
                                                    comment={comment}
                                                    />
                            }
                        )

                    }

                </ul>

        );
    }

}

export default CoList