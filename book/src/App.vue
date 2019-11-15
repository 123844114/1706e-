<!--
 * @Author: your name
 * @Date: 2019-11-12 20:58:58
 * @LastEditTime: 2019-11-13 09:05:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \book\src\views\Demo.vue
 -->
<template>
  <div>
    <p>
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted(){
    console.log(this)
  }
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.router-link-active {
  color: red;
}
</style>
