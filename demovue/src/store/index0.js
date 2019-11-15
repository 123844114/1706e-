/*
 * @Author: your name
 * @Date: 2019-11-04 10:29:35
 * @LastEditTime: 2019-11-04 14:50:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demovue\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
let store=new Vuex.Store({
    state:{
        count:0,
        msg:'hello',
        list:[],
        checkAll:false
    },
    getters:{ //存函数，有return数组给到函数名
        totalPrice(state){
            return state.list.reduce((total,current)=>{
              if(current.flag){
                total+=current.price*current.num
              }
              return total
            },0)
        }
    },
    mutations:{
        add(state,id){
            //加法
            state.list.find(item=>item.id==id).num++
        },
        dec(state){
            //加法
            state.count--
        },
        setList(state,payload){
            state.list=payload
        },
        /*全选
        *  同步checkAll
        * 让所有的list的flag同步
        */
        checkAllFn(state){
            state.checkAll=!state.checkAll
            state.list.forEach(item=>item.flag=state.checkAll)
        }
    },
    //异步函数 context上下文对象{commit dispatch state}
    //
    actions:{
        getList({commit}){
           axios.get('/list').then(({data})=>{
            // context.state.list=data 
            commit('setList',data)
           }) 
        }
    }
})
window.store=store
export default store