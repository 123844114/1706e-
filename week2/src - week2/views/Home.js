/*
 * @Author: your name
 * @Date: 2019-11-11 15:35:26
 * @LastEditTime: 2019-11-12 11:38:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edi
 * @FilePath: \week2\src\views\Home.js
 */
import React, { Component } from 'react';
import RouterView from '../router/RouterView'
import List from '../components/home/List'
class Home extends Component {
    state={
        isLogin:false //标识 是否已登录
    }
  render(){
      let {isLogin}=this.state
      return(
          <div>
            <h2>话题：约翰逊正式宣布：英国将于12月12日举行大选</h2>
            <button>查看详情</button>
            <textarea placeholder={isLogin?'':'登录后发表态度'} onClick={this.clickTextArea}></textarea>
      {isLogin&& <p> <span>用户名：{localStorage.user}</span> <button>退出</button><button>发布</button></p>}
            <List/>
          </div>
      )
  }
  /**
   * 点击文本框
   * 判断是否需要跳路由
   */
  clickTextArea=()=>{
    if(!this.state.isLogin){ //如果false，跳登录
      this.props.history.push('/login')
    }
  }
  /**
   * 利用生命周期 判断用户是否登录
   */
  componentDidMount(){
    let user= localStorage.user
    if(user){
      this.setState({isLogin:true})
    }
  }
}

export default Home;