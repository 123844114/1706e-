<!--
 * @Author: your name
 * @Date: 2019-11-08 08:30:22
 * @LastEditTime: 2019-11-08 14:46:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \book\src\components\Item.vue
 -->
<template>
  <dl>
    <dt>
      <img :src="item.avatar" />
    </dt>
    <dd>
      <h4>{{item.title}}</h4>
      <p>{{item.author}} </p>
      <!-- <p>{{item.summary}}</p> -->
      <div>
        <!-- <button class="detail" @click="$router.push(`/detail/${item.id}`)">书籍详情</button> -->
        <!-- <button class="detail" @click="$router.push({path:'/detail',query:{id:item.id}})">书籍详情</button> -->
        <button class="detail" @click="$router.push(`/detail?id=${item.id}`)">书籍详情</button>
        <AddBook :val="item"/>
      </div>
    </dd>
  </dl>
</template>

<script>
import AddBook from "./AddBook";
export default {
  props: ["item"],
  components: {
    AddBook
  }
};
</script>

<style scoped>
dl {
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
}
dt {
  width: 80px;
}
dt img {
  width: 100%;
}
dd {
  flex: 1;
  padding-left: 10px;
}

.detail {
  background: red;
  color: #fff;
}
</style>
