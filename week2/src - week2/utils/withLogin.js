/*
 * @Author: your name
 * @Date: 2019-11-13 11:27:04
 * @LastEditTime: 2019-11-13 12:07:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \week2\src\utils\withLogin.js
 * 高阶组件：是一个函数，参数是组件，返回值还是组件（具有某项功能）
 */
import React,{Component} from 'react'
export default (Comp,path)=>{
    return class NevComp extends Component{
        componentWillMount(){
            console.log(path)
            if(!localStorage.user){
                this.props.history.push({pathname:'/login',state:{path}})
            }
        }
        render(){
            return <Comp {...this.props}/>
        }
    }
}