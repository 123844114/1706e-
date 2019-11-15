<!--
 * @Author: your name
 * @Date: 2019-11-02 08:55:04
 * @LastEditTime: 2019-11-04 14:36:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demovue\src\components\Item.vue
 -->
<template>
  <div class="item">
    <input type="checkbox" v-model="item.flag" />
    <img :src="item.img" />
    <div>
      <p>{{item.title}}</p>
      <p>
        ￥{{item.price}}
        <button>-</button>
        {{item.num}}
        <button @click="add(item.id)">+</button>
      </p>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  props: ["item"],
  methods: {
    ...mapMutations(['add'])
  }
};
</script>

<style scoped>
.item {
  display: flex;
}
img {
  width: 100px;
}
</style>
