<template>
  <ul>
    <MenuItem v-for="item in list" :key="item.id">
      <span v-if="!item.children">{{item.name}}</span>
      <template v-else>
        <span @click="toggle(item)">{{item.name}}</span>
        <Menu :list="item.children" v-if='item.show'/>
      </template>
    </MenuItem>
  </ul>
</template>

<script>
import MenuItem from "./MenuItem";
export default {
  name: "Menu",
  data(){
      return {
          show:false
      }
  },
  props: ["list"],
  components: { MenuItem },
  methods:{
      /**
       * 点击事件
       */
      toggle(item){
          item.show=!item.show
      }
  }
};
</script>

<style>
</style>