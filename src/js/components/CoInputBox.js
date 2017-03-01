/**
 *
 * Created by tokei on 2017/3/1.
 */

import React, { Component } from 'react';

class CoInputBox extends Component {

    handleChange(event){
        console.log(event.target.value);
    }


    render(){
        return(
            <div>
                <input type="text"
                       className = "usr-Name"
                       placeholder="*昵称"
                       onChange = {this.handleChange.bind(this)}
                                    />
                <input type="text"
                       className = "usr-Mail"
                       onChange = {this.handleChange.bind(this)}
                       placeholder="*邮箱"
                        />
                <input type="text"
                       className = "usr-Website"
                       placeholder="网站"
                       onChange={this.handleChange.bind(this)}
                        />
            </div>
        );
    }

}

export default CoInputBox