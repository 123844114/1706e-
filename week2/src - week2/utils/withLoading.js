/*
 * @Author: your name
 * @Date: 2019-11-13 10:59:03
 * @LastEditTime: 2019-11-13 11:01:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \week2\src\utils\withLoading.js
 */
import React from 'react'
import Loadable from 'react-loadable'

const Loading = () => {
    return <span>loading</span>
}

export default function withLoading(loader,loading=Loading){
 return   Loadable({
        loader,
        loading,
    });
}