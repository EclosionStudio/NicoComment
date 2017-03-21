/**
 *
 * Created by tokei on 2017/3/1.
 */

import React, { Component } from 'react';



class CoInputBox extends Component {



    handleChange1(event){
        // console.log(event.target.value);

       this.props.changeComment(event.target.value,'userName');
    }

    handleChange2(event){

       this.props.changeComment(event.target.value,'userEmail');

    }

    handleChange3(event){
       this.props.changeComment(event.target.value,'userWebsite');
    }


    render(){
        return(
            <div className="input-group">
                <input
                       type="text"
                       className = "form-control"
                       placeholder="*昵称"
                       onChange = {this.handleChange1.bind(this)}
                                    />
                <input type="text"
                       className = "form-control"
                       onChange = {this.handleChange2.bind(this)}
                       placeholder="*邮箱"
                        />
                <input type="text"
                       className = "form-control"
                       placeholder="网站"
                       onChange={this.handleChange3.bind(this)}
                        />
            </div>
        );
    }

}

export default CoInputBox