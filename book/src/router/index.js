/*
 * @Author: your name
 * @Date: 2019-11-07 17:25:49
 * @LastEditTime: 2019-11-13 09:22:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editetail
 * @FilePath: \book\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Foo from '../views/Foo.vue'
import Bar from '../views/Bar.vue'

Vue.use(VueRouter)

const routes = [
 {
   path:'/foo',
   component:Foo
 },{
   path:'/bar',
   component:Bar
 },{
   path:'/detail/:id',
   component:Detail
 }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
