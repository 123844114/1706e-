/*
 * @Author: your name
 * @Date: 2019-11-01 11:08:36
 * @LastEditTime: 2019-11-04 10:41:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \1706E整合\demovue\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import TD from './ToDoList'
// import router from './router'
Vue.config.productionTip = false
// 引入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
Vue.use(ElementUI);
import router from './router'
Vue.prototype.$axios=axios
/* eslint-disable no-new */
import store from './store/index'
window.vm=new Vue({
  el: '#app',
  data:{
    msg:'hello'
  },
  router,
  store,
  // render:createElement=>createElement(App)
  components: { App },
  template: '<App/>'
})
