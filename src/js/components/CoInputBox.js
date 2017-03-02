/**
 *
 * Created by tokei on 2017/3/1.
 */

import React, { Component } from 'react';

class CoInputBox extends Component {

    constructor(props, context){
        super(props);
        this.state ={
            email: 'x@x.com',
            nickName: 'unknown people',
            website: 'http://www.qq.com',
        }
    }


    handleChangeName(event){
        console.log(event.target.value);
        this.props.commentData.userName = event.target.value;
        this.setState({userName: event.target.value});
    }

    handleChangeMail(event){
        console.log(event.target.value);
        this.props.commentData.userEmail = event.target.value;
        this.setState({userEmail: event.target.value});
    }

    handleChangeWebsite(event){
        console.log(event.target.value);
        this.props.commentData.website = event.target.value;
        this.setState({website: event.target.value});
    }


    render(){
        return(
            <div>
                <input type="text"
                       className = "usr-Name"
                       placeholder="*昵称"
                       value={this.state.nickName}
                       onChange = {this.handleChangeName.bind(this)}
                                    />
                <input type="text"
                       className = "usr-Mail"
                       onChange = {this.handleChangeMail.bind(this)}
                       placeholder="*邮箱"
                       value={this.state.email}
                        />
                <input type="text"
                       className = "usr-Website"
                       placeholder="网站"
                       value={this.state.website}
                       onChange={this.handleChangeWebsite.bind(this)}
                        />
            </div>
        );
    }

}

export default CoInputBox