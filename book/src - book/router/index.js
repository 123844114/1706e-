/*
 * @Author: your name
 * @Date: 2019-11-07 17:25:49
 * @LastEditTime: 2019-11-12 20:58:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editetail
 * @FilePath: \book\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }, {
    // path:'/detail/:id',
    path: '/detail',
    name: 'detail',
    component: () => import('../views/Detail')
  }, {
    // path:'/detail/:id',
    path: '/my',
    name: 'my',
    component: () => import('../views/My')
  },{
    path:'/demo',
    component:()=>import('../views/Demo')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
