<template>

   <div class="news_top">
      <div class="content">
        <p>实时热点</p>
        <p>食品安全</p>
        <p>专家点评</p>
        <p>公共卫生</p>
      </div>
   </div>

    <el-row>
      <!-- 轮播图 -->
      <el-col :span="8" :offset="4">
        <el-carousel
          height="500px"
          direction="vertical"
          class="My_carousel"
        >
          <el-carousel-item v-for="item in MyImg" :key="item">
            <img :src="item" alt="" class="ImgStyle">
          </el-carousel-item>
        </el-carousel> 

      </el-col>
      <!-- 轮播图右边卡片 -->
      <el-col :span="8">
        
        <el-card style="max-width: 700px" class="right_car">
          <template #header>
            <div class="right_card_header">
              <span>2025-6-16</span>
              <span><b>今日动态</b></span>
              <span>更多></span>
            </div>
          </template>
            <p v-for="o in 6" :key="o" class="textitem">{{ 'List item ' + o }}</p>
        </el-card>
        
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="4" :offset="4">
        <h1 style="margin:40px; color: rgb(137, 184, 255); ; font-size:25px;">实时热点</h1>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="8" :offset="4">
        <div class="hot_spot">
          <ul>
            <li v-for="item in 5"  :key=item>
              <p>asdasdasdasd</p>
              <p style="font-size:13px; color:gray">2025-6-16</p>
            </li>
          </ul>
        </div>
      </el-col>

      <el-col :span="8" class="my_vedio"> 
        <span @click="play_vedio" class="vedio_play"><el-icon><VideoPlay /></el-icon></span> 
        <video src="@/assets/demo.mp4" width="100%" height="100%" class="vedio_content"></video>
      </el-col>
    </el-row>


    <el-row justify="center" style="background: rgba(128, 128, 128, 0.100); margin:20px;">
      <el-col :span="3">
        <h1 style="margin:40px; color: rgb(137, 184, 255); ; font-size:25px;">食品安全</h1>
      </el-col>
    </el-row>

    <!-- 食品安全 -->
    <el-row v-for="item  in 2 " :key="item" justify="center">
      <el-col v-for="item in 2" :key="item" :span="8" class="food_content">
        <img src="@/assets/米饭图.jpg" alt="图片加载失误" width="40%" style="object-fit:cover" >
        <span class="food_text">
          <p>袁记云饺回应门店肉馅有小虫爬</p>
          <p style="color:gray">近日，重庆，有网友发帖称自己在财富中心袁记云饺门店看到肉馅里有虫子爬来爬去。涉事门店工作人员回应记者采访称，卫生要求都很高的，厨房玻璃也是透明的，都能看见的，会去了解下相关情况。</p>
          <p style="font-size:15px">2025-6-16</p>
        </span>
      </el-col>
    </el-row>
  
    <!-- 专家点评与公共卫生 -->
  <el-row >
    <el-col :span="9" :offset="4" class="expert">
      <h1 style="margin:20px; color: rgb(137, 184, 255); ; font-size:20px;">专家点评</h1>
      <p style="font-size:15px; color:gray ;cursor: pointer;">更多></p>
    </el-col>
    <el-col :span="6" :offset="1" class="expert">
      <h1 style="margin:20px; color: rgb(137, 184, 255); ; font-size:20px;">公共卫生</h1>
      <p style="font-size:15px; color:gray ;cursor: pointer;">更多></p>
    </el-col>

  </el-row>


  <el-row>
    <el-col :span="5" :offset="4">
      <el-card style="max-width: 500px" body-style="padding:0" class="expert_left_card" shadow="hover">
        <img
          src="@/assets/米饭图.jpg"
          style="width: 100%"
        />
        <template #footer>Footer content</template>
      </el-card>
    </el-col>
    <el-col :span="5" >
      <el-card style="max-width: 500px" body-style="padding:0" class="expert_left_card" shadow="hover">
        <img
          src="@/assets/米饭图.jpg"
          style="width: 100%"
        />
        <template #footer>Footer content</template>
      </el-card>
    </el-col>


    <el-col :span="6" >
      <div class="hot_spot">
          <ul style="padding:0">
            <li v-for="item in 4"  :key=item>
              <p>asdasdasdasd</p>
              <p style="font-size:13px; color:gray">2025-6-16</p>
            </li>
          </ul>
        </div>
    </el-col>

  </el-row>
</template>

<script setup>
import img1 from "@/assets/米饭图.jpg"
import { ref } from "vue"

const MyImg = ref([img1 , img1,img1 , img1])

const play_vedio = () => {

  document.querySelector(".vedio_play").style.display = "none";
  const vedio = document.querySelector(".vedio_content")

  vedio.play()

  vedio.addEventListener("ended" , () => {
    document.querySelector(".vedio_play").style.display = "flex";
  })

}

</script>

<style scoped>

.news_top {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  width: 140vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 50px;
  background: rgb(70, 192, 241);
  color: rgb(255, 255, 255);
  letter-spacing: 3px;
}

.content :nth-child(n) {
  cursor: pointer;
}

.My_carousel {
  width: 100%;
}
.ImgStyle {
  object-fit: cover;
  width: 100vh;
}

.right_card_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: none;
}

.right_card_header > :nth-child(2) {
  transform: translateX(-20px);
}

.right_car {
  height:100%;
  line-height: 40px;
  text-align: center;
  background: rgb(244, 244, 244);
  margin-left: 20px;
}

.right_car :nth-child(n) {
  cursor: pointer;
}

.right_car > :nth-child(n+2) :hover {
  color: skyblue;
}

.hot_spot ul > :nth-child(n){
  list-style: none;
  margin-bottom: 20px;
  letter-spacing: 2px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.320);
  display: flex;
  justify-content: space-between;
}

.hot_spot ul > :nth-child(n) :hover {
  color: rgb(70, 192, 241);
  cursor: pointer;
}

.vedio_play{
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.404);
  font-size: 60px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.my_vedio{
  position: relative;
  width: 100%;
  height: 100%;
  margin-left: 20px;
}

.food_text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 40px;
  overflow: hidden;
}

.food_text :nth-child(1):hover {
  color: rgb(70, 192, 241);
}

.food_text :nth-child(2) {
  width: 300px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.food_content{
  display:flex;
  margin-bottom:30px;
  cursor: pointer;
}

.expert {
  border-bottom:1px solid rgb(137, 184, 255);
  margin-bottom:20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.expert_left_card {
  margin-bottom: 20px;
  transform: translateX(-40px);
  margin-left: 20px;
}


</style>