/*
 * @Author: your name
 * @Date: 2019-11-07 17:25:49
 * @LastEditTime: 2019-11-08 15:39:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \book\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import listJSON from '../data/list.json'
export default new Vuex.Store({
  state: {
    listJSON: listJSON.data,
    detail: {},
    checkAll: false
  },
  getters: {
    myList(state) {
      return state.listJSON.filter(item => item.read)
    }
  },
  mutations: {
    getDetail(state, id) {
      state.detail = state.listJSON.find(item => item.id == id)
    },
    /**
     * 加入书架
     */
    addBook(state, id) {
      console.log('1')

      let obj = state.listJSON.find(item => item.id == id)
      if (obj.read) { //当已在书架后就不能再操作
        return
      }
      obj.read = true
      //存本地
      let localARR = localStorage.list ? JSON.parse(localStorage.list) : []
      localARR.push(obj)
      localStorage.list=JSON.stringify(localARR)
    },
    /**
     * 全选按钮
     * checkAll改变
     * 同步
     */
    checkAllFn(state) {
      state.checkAll = !state.checkAll
      state.listJSON.forEach(item => item.flag = state.checkAll)
    },
    /**
     * 单选
     * 因为是v-model所以不需要赋值了
     * every
     */
    checkSingle(state) {
      state.checkAll = state.listJSON.filter(item => item.read).every(item => item.flag)
    },
    /**
     * 删除
     * 将flag为true的项，他的read属性设置为false
     * 操作全选
     */
    delFn(state) {
      state.listJSON.forEach(item => {
        if (item.flag) {
          item.read = false
          item.flag = false
        }
      })
      state.checkAll = false
    }
  },
  actions: {
  },
  modules: {
  }
})
