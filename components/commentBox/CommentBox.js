
import React, { Component } from 'react';

class CommentBox extends Component {

    constructor(props, context){
        super(props, context);
        this.state ={
            userEmail: 'NicoTime@nekohand.moe',
            nickName: 'NicoYazawa',
            webSite: 'http://www.bilibili.com'
        }
    }


    render(){
        return(
            <div>
                <input type="text"
                       placeholder="邮箱"
                       value={ this.state.userEmail }
                />
                <input type="text"
                       placeholder="昵称"
                       value={ this.state.nickName }
                />
                <input type="text"
                       placeholder="网址（选填）"
                       value={ this.state.webSite }
                />
                <button> 提交评论 </button>
            </div>
        );
    }

}

export default CommentBox