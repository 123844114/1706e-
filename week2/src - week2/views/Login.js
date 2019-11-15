/*
 * @Author: your name
 * @Date: 2019-11-11 15:35:42
 * @LastEditTime: 2019-11-13 12:07:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \week2\src\views\Login.js
 */
import React, { Component } from 'react';
import axios from 'axios';
class Login extends Component {
    state = {
        name: "",
        pwd: ""
    }
    render() {
        console.log(this.props)
        let {name,pwd}=this.state
        return (
            <div>
                <p><input type="text" placeholder="请输入账号" value={name} onChange={(e)=>{
                    // 赋值
                    this.setState({name:e.target.value})
                }}/></p>
                <p><input type="password" placeholder="请输入密码" value={pwd} onChange={(e)=>{
                    // 赋值
                    this.setState({pwd:e.target.value})
                }}/></p>
                <button onClick={this.submitFn}>登录</button>

            </div>
        );
    }
    /**
     * 登录
     * 非空校验
     * 正则校验：密码长度不小于6位，只能为字母和数字组合    ^[a-zA-Z0-9]{6,10}$
     */
    submitFn=()=>{
        let {name,pwd}=this.state
        if(!name.trim() || !pwd.trim()){
            //非空
            alert('不能为空')
        }else{ //否则
            let reg=/^[a-zA-Z0-9]{6,10}$/
            if(reg.test(pwd)){// 符合条件，调接口
                axios.get(`/api_login?name=${name}&pwd=${pwd}`).then(({data})=>{
                    if(data.code===1){ //登录成功
                        localStorage.user=name
                        this.props.history.go(-1)
                    }else{//登录不成功
                        alert(data.msg)
                    }
                })
            }else{
                alert('密码不符合规则')
            }
            
        }
    }

}

export default Login;