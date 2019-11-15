/*
 * @Author: your name
 * @Date: 2019-11-07 17:25:49
 * @LastEditTime: 2019-11-08 16:42:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \book\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
import { AddressList,Area ,Dialog  } from 'vant';
Vue.use(AddressList).use(Area ).use(Dialog );
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
