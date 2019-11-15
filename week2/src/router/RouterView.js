/*
 * @Author: your name
 * @Date: 2019-11-11 15:47:16
 * @LastEditTime: 2019-11-13 11:24:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \week2\src\router\RouterView.js
 */
import { Switch, Redirect, Route } from "react-router-dom";
import React from 'react'
export default function RouterView(props) {
    let {routes}=props
    return (
        <Switch>
            {
                routes.map((item,index)=>item.redirect?<Redirect key={index} to={item.redirect}/>
                :<Route path={item.path} key={index} render={(props)=>{return <item.component {...props} routes={item.children}/>}}/>)
            }
        </Switch>
    )
}