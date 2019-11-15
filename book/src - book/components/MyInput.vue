<!--
 * @Author: your name
 * @Date: 2019-11-08 17:18:41
 * @LastEditTime: 2019-11-09 12:47:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \book\src\components\MyInput.vue
 -->
<template>
  <input type="text" @input="$emit('input',$event.target.value)" />
</template>

<script>
export default {
  methods: {
  }
};
</script>

<style>
</style>