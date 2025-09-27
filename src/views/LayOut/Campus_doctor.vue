<template>

  
<!-- 右侧导航栏 -->
<el-affix :offset="400">
  <div class="doctor_link">
    <el-anchor>
        <el-anchor-link href="#part0">急诊</el-anchor-link>
        <el-anchor-link href="#part1">外科</el-anchor-link>
        <el-anchor-link href="#part2">内科</el-anchor-link>
    </el-anchor>
  </div>
</el-affix>

<!-- 顶部文字 -->
  <div class="top_text">
  <el-row  justify="center">
    <el-col :span="7"  >
        <h1 style="text-align:start; width:120vh ;letter-spacing: 3px; margin-top:100px; color:#2b2b2b">请根据症状咨询医师 在医师指导下进行用药</h1>
    </el-col>
  </el-row>
  <el-row justify="center">
    <el-col :span="1" >
        <p style="letter-spacing: 3px; color:gray ; margin-top:5px ; transform:translateX(-20px);width:200px;">医者仁心</p>
    </el-col>
  </el-row>
</div>

<div v-for="(item , idx) in MyImg" :key="item" :id="'part' + idx" >
  
  <!-- 分隔背景 -->
  <el-row class="context" :style= "{backgroundImage : `url(`+ item.bg +`)`}"><h1>{{item.bg_h1_text}}</h1> <p>{{item.bg_p_text}}</p></el-row>
  <el-row class="row_card" justify="center" >

    <!-- 医师标签 -->
    <el-col style="display:flex ; justify-content: center;" :span="7" v-for="item  in 3" :key="item">
        <el-card class="MyCard" shadow="hover">
          <div> <el-avatar :size="150" :src="img" class="My_avatar"/></div>
          
          <div style="text-align:center">
              <h1>医师姓名 </h1>
              <br>
              <p>医师标签</p>
              <br>
              <p>医师介绍<br> 介绍内容</p>
          </div>

          <div class="check_btn">
            <el-button  size="large" circle >
              <el-icon><Promotion /></el-icon>
            </el-button>
          </div>
        </el-card>
    </el-col>
  
    
  </el-row>
</div>


</template>

<script setup>
import {ref} from "vue"
import avatar_url from "@/assets/doctor.jpg"
import img_bg from "@/assets/back_img.jpg"
import img_bg2 from "@/assets/bg.jpg"

const img = ref(avatar_url)

let MyImg = ref([
  {bg : img_bg , bg_h1_text : "疑难杂症，不知何病？" , bg_p_text : "专业医师，快速寻因"},
  {bg : img_bg2 , bg_h1_text : "不知何病？" , bg_p_text : "快速寻因"},
  {bg : img_bg , bg_h1_text : "疑难杂症？" , bg_p_text : "专业医师"}
])


</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.top_text {
  margin-bottom: 100px;
}

.context :nth-child(1) {
  font-size: 40px;
  text-align: center;
  letter-spacing: 10px;
  color: rgb(255, 255, 255);
  font-weight: 400;
  display: block;
  mix-blend-mode: difference;
}

.context :nth-child(2) {
  margin-top: 20px;
  font-size: 20px;
  text-align: center;
  letter-spacing: 10px;
  color: white;
  font-weight: 400;
  display: block;
}


.context{
  background-image: url("/src/assets/bg.jpg");
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  object-fit: cover;
  background-size: cover;
  background-attachment: fixed;
  background-position: top center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.row_card {
  width: 100%;
  height: 60vh;
  background: gray;
}

.MyCard {
  transform: translateY(-20px);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height:500px;
  cursor: pointer;
  z-index: 99;
}

.MyCard:hover {
    transition: 2s ease;
    transform: scale(1.1);
}

.check_btn {
  text-align:center;
  margin-top:30px;
}

.doctor_link {
  position: absolute;
  align-items: center;
  right: 0;
  width: 100px;
  height: 100px;
  background: white;
  z-index: 99;
}



</style>