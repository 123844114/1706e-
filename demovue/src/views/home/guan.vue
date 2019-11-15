<!--
 * @Author: your name
 * @Date: 2019-11-02 11:29:22
 * @LastEditTime: 2019-11-04 14:49:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demovue\src\views\home\my.vue
 -->

<template>
  <div class="guan">
    <Item v-for='item in list' :key='item.id' :item="item" />
    <h1>全选<input type="checkbox" :checked="checkAll" @change="checkAllFn">总价：{{totalPrice}}</h1>
  </div>
</template>

<script>
import Item from '@/components/Item'
import{mapMutations,mapState,mapActions, mapGetters} from 'vuex'
export default {
  components:{Item},
  computed: {
    ...mapState(['list','checkAll']),
    ...mapGetters(['totalPrice'])
    // count(){
    //   return this.$store.state.count
    // }
  },
  created(){
    this.getList()
  },
  methods: {
    // add() {
    //   this.$store.commit("add", 10);
    // },
    // dec() {
    //   this.$store.commit("dec");
    // }
    ...mapMutations(['add','dec','checkAllFn']),
    ...mapActions(['getList'])
    // getList(){
    //   this.$store.dispatch('getList')
    // }
  },
  actions:{}
};
</script>

<style>
</style>