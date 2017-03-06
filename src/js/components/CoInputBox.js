/**
 *
 * Created by tokei on 2017/3/1.
 */

import React, { Component } from 'react';

class CoInputBox extends Component {


    handleChange1(event){
        console.log(event.target.value);
        let text = event.target.value;
        let cat = 'userName';
        this.props.submitComment(text,cat);
    }

    handleChange2(event){
        console.log(event.target.value);
        let text = event.target.value;
        let cat = 'userEmail';
        this.props.submitComment(text,cat);
    }

    handleChange3(event){
        console.log(event.target.value);
        let text = event.target.value;
        let cat = 'userWebsite';
        this.props.submitComment(text,cat);
    }


    render(){
        return(
            <div>
                <input type="text"
                       className = "usr-Name"
                       placeholder="*昵称"
                       onChange = {this.handleChange1.bind(this)}
                                    />
                <input type="text"
                       className = "usr-Mail"
                       onChange = {this.handleChange2.bind(this)}
                       placeholder="*邮箱"
                        />
                <input type="text"
                       className = "usr-Website"
                       placeholder="网站"
                       onChange={this.handleChange3.bind(this)}
                        />
            </div>
        );
    }

}

export default CoInputBox