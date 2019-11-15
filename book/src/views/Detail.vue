<!--
 * @Author: your name
 * @Date: 2019-11-07 17:25:49
 * @LastEditTime: 2019-11-08 16:55:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \book\src\views\Detail.vue
 -->
<template>
  <div class="about">
    <!-- <h1>详情</h1> -->
    <!-- {{detail}} -->
    <!-- <AddBook :val="detail"/> -->
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      @add="onAdd"
      @edit="onEdit"
    />
    <van-dialog v-model="show" title="标题" show-cancel-button @confirm="aa">
      <input type="text" v-model="val" />
    </van-dialog>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
import AddBook from "@/components/AddBook";
export default {
  components: { AddBook },
  computed: {
    ...mapState(["detail"])
  },
  created() {
    //接收id
    console.log(this.$route.query.id);
    this.getDetail(this.$route.query.id);
  },
  methods: {
    ...mapMutations(["getDetail"]),
    onAdd() {
      Toast("新增地址");
    },
    aa(){
      alert()
    },

    onEdit(item, index) {
      // Toast("编辑地址:" + index);
      this.show = true;
      // this.$dialog.confirm({
      //   title: "标题",
      //   message: "弹窗内容"
      // })
      //   .then(() => {
      //     console.log('确定')
      //   })
      //   .catch(() => {
      //     // on cancel
      //     console.log('取消')

      //   });
    }
  },
  data() {
    return {
      show: false,
      val: "",
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号"
        }
      ],
      disabledList: [
        {
          id: "3",
          name: "王五",
          tel: "1320000000",
          address: "浙江省杭州市滨江区江南大道 15 号"
        }
      ]
    };
  }
  // }
};
</script>>
