<!--
 * @Author: your name
 * @Date: 2019-11-02 10:45:21
 * @LastEditTime: 2019-11-02 11:26:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit<
 * @FilePath: \demovue\src\App.vue
 -->
<template>
<div>
  <router-view />
    
    <router-link to="/home" tag="span">首页</router-link>
    <router-link to="/list" tag="span">列表</router-link>
    <router-link to="/my" tag="span">我的</router-link>
        </div>
</template>

<script>

export default {

}
</script>

<style>
    .router-link-active{
        color: orangered;
        
    }
    
</style>
