
import React, { Component } from 'react';

class CommentBox extends Component {

    // constructor(props, context){
    //     super(props, context);
    //     this.state ={
    //         userEmail: 'NicoTime@nekohand.moe',
    //         nickName: 'NicoYazawa',
    //         webSite: 'http://www.bilibili.com'
    //     }
    // }
    handleInput(){
        console.log('1');
        console.log(this.props.userComment[0].userEmail);
    }

    render(){
        return(
            <div>
                <input type="text"
                       placeholder="邮箱"
                       value= ' '
                       onChange = { this.handleInput.bind(this) }
                />
                <input type="text"
                       placeholder="昵称"
                       value=' '
                       onChange = { this.handleInput.bind(this) }
                />
                <input type="text"
                       placeholder="网址（选填）"
                       value=' '
                       onChange = { this.handleInput.bind(this) }
                />
                <textarea/>
                <button> 提交评论 </button>
            </div>
        );
    }

}

export default CommentBox