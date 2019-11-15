/*
 * @Author: your name
 * @Date: 2019-11-13 16:48:53
 * @LastEditTime: 2019-11-13 16:50:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \week2\src\components\Footer.js
 */
import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
class Footer extends Component {
    render() {
        return (
            <footer>
                <NavLink to='/home/movie'>电影</NavLink>
                <NavLink to='/home/cinema'>影院</NavLink>
                <NavLink to='/home/my'>我的</NavLink>
            </footer>
        );
    }
}

export default Footer;
