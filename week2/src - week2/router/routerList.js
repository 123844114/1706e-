/*
 * @Author: your name
 * @Date: 2019-11-11 15:27:48
 * @LastEditTime: 2019-11-13 11:23:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \week2\src\router\routerList.js
 */

// import Home from '../views/Home'
// import Login from '../views/Login'
// import Detail from '../views/Detail'
// import A from '../views/home/A'



// const Home = Loadable({
//     loader: () => import('../views/Home'),
//     loading: Loading,
// });
// const Login = Loadable({
//     loader: () => import('../views/Login'),
//     loading: Loading,
// });
// const Detail = Loadable({
//     loader: () => import('../views/Detail'),
//     loading: Loading,
// });
// const A = Loadable({
//     loader: () => import('../views/home/A'),
//     loading: Loading,
// });
import withLoading from '../utils/withLoading'
const Home = withLoading(() => import('../views/Home'))
const Login = withLoading(() => import('../views/Login'))
const Detail = withLoading(() => import('../views/Detail'))
const A = withLoading(() => import('../views/home/A'))
const list = [
    {
        path: '/home',
        component: Home,
        children: [
            {
                path: '/home/a',
                component: A
            }
        ]
    }, {
        path: '/login',
        component: Login
    }, {
        path: '/detail/:id',
        component: Detail
    }, 
    {
        path:'/a',
        component:A,
        required:true
    },{ //重定向写到最后
        redirect: '/home'
    }
]
export default list
