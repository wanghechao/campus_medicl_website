<template>
  <!-- 返回顶部按钮 -->
  <el-backtop :right="100" :bottom="100" style="background-color: rgb(110, 181, 252); color:white; width:60px;height:60px" />
  <!-- 首页轮播图 -->
  <el-carousel @change="changmes" :interval="3000" height="60vh" motion-blur>
    <el-carousel-item v-for="item  in MyImg" :key="item">
      <img :src="item" alt="" class="ImgStyle">
    </el-carousel-item>
  </el-carousel>


  <row-lable>新闻动态</row-lable>
  <!-- 新闻动态内容 -->
  <el-row justify="center" class="news_contain">

    <NewsList />
  </el-row>


  <row-lable>科普天地</row-lable>
   <!-- 科普天地内容 -->
  <Science_world />


  <row-lable>专业医师</row-lable>
  <Doctors />

</template>

<script setup>
import  is_animate  from "@/utils/animateFn.js"
import { animate2 } from "@/utils/animateFn.js";
import NewsList from "../home_layout_contains/news_contain.vue";
import Science_world from "../home_layout_contains/popular_science_world.vue";
import Doctors from "../home_layout_contains/doctors.vue";
import {ref , onMounted, onBeforeMount} from "vue"
import img1 from "@/assets/护士节.jpg";
import img2 from "@/assets/爱眼日.jpg";
import img3 from "@/assets/中风预防.jpg";

const MyImg = ref([img2 , img1,img3 , img2])

let val = ref(0)
const innerRef = ref();
const scrollbarRef = ref()


onMounted(() => {


  is_animate(".news_contain")
  // animate2(".Science_world")
})



const news_text =["饭吃越少越长寿？", "主食吃到这个数，才最健康" , "text","text", "text" , "text","text"]

</script>


<style scoped>
.news_contain {
  overflow: hidden;
}

.news_contain > :nth-child(n) {
  transform: translateX(2000px);
  transition: all 3s ease;
}

.news_contain2 {
  overflow: hidden;
}

.news_contain2 > :nth-child(n) {
  transform: translateX(-2000px);
  transition: all 3s ease;
}

.show {
  transform: translateX(0px)!important;
}

.ImgStyle {
  object-fit:cover;
  width: 100%;
}


.el-carousel__item  {
  display: flex;
  justify-content: center;
}


</style>
