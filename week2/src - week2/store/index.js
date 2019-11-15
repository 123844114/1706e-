/*
 * @Author: your name
 * @Date: 2019-11-12 15:28:32
 * @LastEditTime: 2019-11-12 16:29:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \week2\src\store\index.js
 */
import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
function reducers(state={list:{}},action){
    let newstate={...state,list:{...state.list}}
    switch(action.type){
        // 获取数组
        case 'SET_LIST':newstate.list=action.list
        return newstate;
        case 'ZAN':{
            // 判卷
           let obj= newstate.list.comments[action.id]
        
            if(obj.isZan){
                obj.vote--
            }else{
                obj.vote++
            }
            obj.isZan=!obj.isZan
        }
        default:return newstate
    }
}
let store=createStore(reducers,applyMiddleware(thunk))
window.store=store
export default store