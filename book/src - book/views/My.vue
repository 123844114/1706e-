<!--
 * @Author: your name
 * @Date: 2019-11-08 14:54:47
 * @LastEditTime: 2019-11-09 12:48:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \book\src\views\My.vue
 -->
<template>
  <div class="my">
      我的  过滤出read为true的项
      {{checkAll}}
     <p v-for='item in myList' :key='item.id'>
         <input type='checkbox' v-model='item.flag' @change="checkSingle"/> {{item.title}}
     </p>
     <p>
         <label><input type="checkbox" :checked="checkAll" @change="checkAllFn"> 全选</label>
         <button @click="delFn">删除</button>
     </p>
     <!-- <MyInput v-model='val'/>{{val}} -->
     <MyInput @input="val=$event"/>{{val}}
  </div>
</template>

<script>
import MyInput from '@/components/MyInput'
import { mapGetters, mapState, mapMutations } from 'vuex';
export default {
    components:{MyInput},
    data(){
        return {
            val:''
        }
    },
computed:{
    ...mapGetters(['myList']),
    ...mapState(['checkAll'])
},
methods:{
    getV(v){
        console.log('v:',v)
        this.val=v
    },
    ...mapMutations(['checkAllFn','checkSingle','delFn'])
}
}
</script>

<style>

</style>