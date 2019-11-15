<!--
 * @Author: your name
 * @Date: 2019-11-08 08:30:22
 * @LastEditTime: 2019-11-08 14:51:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \book\src\components\AddBook.vue
 -->
<template>
  <button class="bookshelf" @click="addBook(val.id)" :class="{'active':val.read}">{{val.read?'已在书架':'加入书架'}}</button>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["val"],
  methods: {
    /**
     * 加入书架
     */
    ...mapMutations(["addBook"])
  }
};
</script>

<style>
button {
  width: 100px;
  height: 35px;
  line-height: 35px;
  font-size: 16px;
  background: #fff;
  border: none;
  outline: none;
}
.bookshelf {
  /* border: 1px solid blue; */
  color: #fff;
  background: blue;
}
.bookshelf.active {
  color: #fff;
  background: gray;
  /* border-color: gray; */
}
</style>
