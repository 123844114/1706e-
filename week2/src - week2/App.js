/*
 * @Author: your name
 * @Date: 2019-11-11 11:17:26
 * @LastEditTime: 2019-11-11 15:50:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \week2\src\App.js
 */
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, NavLink } from 'react-router-dom'
// import Home from './views/Home'
// import Login from './views/Login'
import RouterView from './router/RouterView'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/home' component={Home}></Route>
          <Route path='/login' component={Login}></Route>
          <Redirect to='/home'></Redirect>
        </Switch>
        <p className='tab'>
          <NavLink to='/home'>home</NavLink>
          <NavLink to='/login'>login</NavLink>
        </p>
      </BrowserRouter>

    );
  }
}

export default App;