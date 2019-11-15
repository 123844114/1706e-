<!--
 * @Author: your name
 * @Date: 2019-11-08 08:56:50
 * @LastEditTime: 2019-11-08 16:20:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \book\src\components\List.vue
 -->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <Item v-for="(item,index) in list" :key="index" :item="item" />
    </div>
    <span class="loading" v-if="show">loading</span>
  </div>
</template>

<script>
import Item from "./Item";
import listJson from "../data/list.json";
import BScroll from "better-scroll";
export default {
  components: { Item },
  data() {
    return {
      list: [],
      pageNum: 1,
      show: false,
      localARR: []
    };
  },
  created() {
    //调接口 只要第一页5条
    this.list = listJson.data.slice(0, 5);
    this.setList() //已刷新就的判断
  },
  mounted() {
    // let wrapper = document.querySelector(".wrapper");
    this.$nextTick(() => {
      //当真实dom存在之后，再触发回调
      let scroll = new BScroll(this.$refs.wrapper, {
        //第二个参数配置项
        pullUpLoad: {
          threshold: 50
        },
        probeType: 2
      });
      scroll.on("pullingUp", () => {
        console.log("上拉");
        //显示loading
        this.show = true;
        let _this = this;
        setTimeout(() => {
          //加第二页的数据
          this.pageNum++;
          //准备第二页数据
          let start = (this.pageNum - 1) * 5;
          let end = this.pageNum * 5;
          let arr = listJson.data.slice(start, end);
          // 新增一条
          this.list = [...this.list, ...arr];
          // 新增出来的数据也需要判断本地有没有
          this.setList()
          scroll.finishPullUp();
          scroll.refresh();
          _this.show = false;
        }, 2000);
      });
    });
  },
  methods: {
    /**
     * 判断用本地数据还是用仓库
     * 
     */
    setList() {
      this.localARR = localStorage.list ? JSON.parse(localStorage.list) : [];
      this.list.forEach((item, i) => {
        // 本地存储中是否能找到item
        let index = this.localARR.findIndex(v => v.id === item.id);
        if (index != -1) { //如果item在本地有，就用本地替到list中
          this.list[i] = this.localARR[index];
        }
      });
    }
  }
};
</script>

<style scoped='scss'>
.wrapper {
  height: 100%;
  /* height: 500px; */
}
.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background: greenyellow;
  z-index: 100;
}
</style>