/*
 * @Author: your name
 * @Date: 2019-11-11 16:02:08
 * @LastEditTime: 2019-11-13 12:05:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \week2\src\views\home\A.js
 */
import React, { Component } from 'react';
import withLogin from '../../utils/withLogin'
class A extends Component {
    render() {
        console.log(this)
        return (
            <div>
                a
            </div>
        );
    }
}

export default withLogin(A,'/a');