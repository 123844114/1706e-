<!--
 * @Author: your name
 * @Date: 2019-11-12 20:58:58
 * @LastEditTime: 2019-11-13 08:50:40
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
export default {};
</script>

<style>
</style>