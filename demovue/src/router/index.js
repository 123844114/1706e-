/*
 * @Author: your name
 * @Date: 2019-11-01 11:08:36
 * @LastEditTime: 2019-11-04 15:12:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demovue\src\router\index.js
 */
import Vue from 'vue'
import RouterVue from 'vue-router'
Vue.use(RouterVue)
const router= new RouterVue({
    mode:'hash',//history
    routes:[
        {
            path:'/',
            redirect:'/home/guan'
        },
        {
            path:'/home',
            redirect:'/home/guan',
            component:()=>import('../views/Home'),
            children:[
                {
                    path:'/home/guan',
                    component:()=>import('../views/home/guan')
                }
            ]
        },
        {
            path:'/list',
            component:()=>import('../views/List')
        },
        {
            path:'/login',
            component:()=>import('../views/Login')
        },
        {
            path:'/detail/:id',
            component:()=>import('../views/Detail')
        },
        {
            path:'/my',
            component:()=>import('../views/My'),
            beforeEnter:(to,from,next)=>{
                    //是否登录
                    if(localStorage.user){
                        next()
                    }else{
                        next('/login')
                    }
            }
        }
    ]
})
router.beforeEach((to,from,next)=>{
    next()
})
export default router
