/*
 * @Author: your name
 * @Date: 2019-11-11 15:50:48
 * @LastEditTime: 2019-11-12 15:34:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \week2\src\router\index.js
 */
import React, { Component } from 'react';
import RouterView from './RouterView'
import routerList from './routerList'
import { BrowserRouter } from 'react-router-dom'
import MyHeader from '../components/MyHeader'
// 引入react-rudex
import { Provider } from 'react-redux'
import store from '../store'
class index extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <MyHeader />
                    <RouterView routes={routerList} />
                </BrowserRouter>
            </Provider>
        );
    }
}

export default index;