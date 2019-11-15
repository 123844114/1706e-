/*
 * @Author: your name
 * @Date: 2019-11-11 15:27:48
 * @LastEditTime: 2019-11-14 11:11:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \week2\src\router\routerList.js
 */
import withLoading from '../utils/withLoading'
import Detail from '../views/Detail'
const list = [
    {
        path: '/login',
        component: withLoading(() => import('../views/Login'))
    },
    {
        path: '/mydetail/:id',
        component:Detail
        // component: withLoading(() => import('../views/Detail'))
    }, {
        path: '/home',
        component: withLoading(() => import('../views/Home')),
        children: [
            {
                path: '/home/movie',
                component: withLoading(() => import('../views/home/Movie')),
                children: [
                    {
                        path: '/home/movie/hot',
                        component: withLoading(() => import('../views/home/movie/Hot')),

                    },
                    {
                        path: '/home/movie/ing',
                        component: withLoading(() => import('../views/home/movie/Ing')),

                    },
                    {
                      redirect:'/home/movie/hot'
                    }
                ]
            },
            {
                path: '/home/my',
                component: withLoading(() => import('../views/home/My')),

            }, 
            {
                path: '/home/cinema',
                component: withLoading(() => import('../views/home/Cinema')),

            },{
                redirect: '/home/movie/hot'
            }
        ]
    },
    {
        redirect: '/home/movie/hot'
    }
]
export default list
