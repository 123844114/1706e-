/*
 * @Author: your name
 * @Date: 2019-11-12 15:28:32
 * @LastEditTime: 2019-11-14 15:52:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \week2\src\store\index.js
 */
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import React from 'react'
function reducers(state={dialogOption:{visible:false,com:<></>},filterCimema:{}},action){
    let newstate=JSON.parse(JSON.stringify(state))
    // let newstate={...state,dialogOption:{...state.dialogOption},filterCimema:{...state.filterCimema}}
    
    switch(action.type){
        case 'SET_DIALOG_OPTION':{
            newstate.dialogOption=action.opt
            return newstate
        }
        case 'SET_FILTER_CINEMAS':{
            newstate.filterCimema=action.data
            return newstate
        }
        default:return newstate
    }
}
let store = createStore(reducers, applyMiddleware(thunk))
window.store = store
export default store