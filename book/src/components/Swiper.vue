<!--
 * @Author: your name
 * @Date: 2019-11-07 17:25:49
 * @LastEditTime: 2019-11-08 10:32:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Ed
 * @FilePath: \book\src\components\Swiper.vue
 -->
<template>
  <swiper :options="opt">
    <swiperSlide v-for='(item,index) in imgs' :key="index">
      <img :src="`/img/${item}`" alt="">
    </swiperSlide>
  </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components:{swiper,swiperSlide},
data(){
  return {
    imgs:['1.jpg','2.jpg','3.jpg'],
    opt:{
      autoplay:true,
      loop:true
    }
  }
}
}
</script>

<style scoped lang='scss'>
.swiper-container{
  img{
    width: 100%
  }
}
</style>
