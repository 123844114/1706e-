<!--
 * @Author: your name
 * @Date: 2019-11-07 17:25:49
 * @LastEditTime: 2019-11-08 14:54:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \book\src\views\Home.vue
 -->

<template>
  <div class="home">
    <Swiper class="swiper" />
    <div class="list">
      <List />
    </div>
    <router-link tag='span' to='/my'>我的书架</router-link>
  </div>
</template>

<script>
import Swiper from "@/components/Swiper";
import List from "@/components/List";

export default {
  components: { Swiper, List },
  data() {
    return {};
  }
};
</script>

<style scoped lang='scss'>
.swiper {
  width: 100%;
  height: 170px;
}
.list {
  flex: 1;
  overflow: auto;
}
</style>