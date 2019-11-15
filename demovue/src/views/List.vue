<!--
 * @Author: your name
 * @Date: 2019-11-02 10:57:57
 * @LastEditTime: 2019-11-04 16:57:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit<>
 * @FilePath: \demovue\src\views\List.vue
 -->
<template>
  <div>
    <span>{{count}}</span>{{list}}
    <button @click="add">+</button>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  computed:{
    ...mapState(['count','list'])
    // count(){
    //   return this.$store.state.count
    // },
    // list(){
    //   return this.$store.state.list
    // }
  },
  methods: {
    ...mapMutations(['add'])
    // add() {
    //   this.$store.commit('add')
    // }
  }
};
</script>

<style>
</style>