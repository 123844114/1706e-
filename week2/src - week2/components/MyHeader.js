/*
 * @Author: your name
 * @Date: 2019-11-12 10:24:14
 * @LastEditTime: 2019-11-12 11:46:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \week2\src\components\MyHeader.js
 */
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
class MyHeader extends Component {
    render() {
        return (
            <header>
                <span onClick={()=>{this.props.history.go(-1)}}>&lt;</span>
                网易
            </header>
        );
    }
}

export default withRouter(MyHeader);