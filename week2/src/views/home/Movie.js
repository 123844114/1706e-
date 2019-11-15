/*
 * @Author: your name
 * @Date: 2019-11-13 15:48:47
 * @LastEditTime: 2019-11-13 16:58:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \week2\src\views\home\movie\Ing.js
 */
import React, { Component } from 'react';
import RouterView from '../../router/RouterView'
import { NavLink } from 'react-router-dom';
class Movie extends Component {
    render() {
        return (
            <div className='movie'>
                <div className='tab'>
                    <NavLink to='/home/movie/hot'> 正在热映</NavLink>
                    <NavLink to='/home/movie/ing'> 即将上映</NavLink>
                </div>
                <RouterView routes={this.props.routes} />

            </div>
        );
    }
}

export default Movie;