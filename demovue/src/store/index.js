import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
window.store = new Vuex.Store({
    state: { count: 0, list: [] },
    getters: {},
    mutations: {//mutations中的函数需要使用commit来触发
        add(state) {
            state.count++
        },
        // setList(state,payload){
        //     state.list=payload
        // }
    },
    actions: {
        getList(context) {
            axios.get('/list').then(({ data }) => {
                context.state.list = data
            })
        }
    }
})
export default store