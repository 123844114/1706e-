/*
 * @Author: your name
 * @Date: 2019-11-13 15:48:47
 * @LastEditTime: 2019-11-13 16:50:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \week2\src\views\home\movie\Ing.js
 */
import React, { Component } from 'react';
import RouterView from '../router/RouterView'
import MyFooter from '../components/Footer'
class Home extends Component {
    render() {
        return (
            <div className='home'>
               <RouterView routes={this.props.routes}/>
               <MyFooter/>
            </div>
        );
    }
}

export default Home;