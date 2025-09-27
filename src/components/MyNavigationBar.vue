<template>

   <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    :router = "true"
  >

    <el-menu-item index="/">
        <el-icon><ChatRound /></el-icon>   
    </el-menu-item>

    <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item index="/medicine_classify" >药品分类</el-menu-item>
    <el-sub-menu  index="/campus_doctor">
      <template  #title>专业医师</template>
      <el-menu-item index="/campus_doctor">全部专家</el-menu-item>
      <el-menu-item index="/campus_doctor#part0">急诊专家</el-menu-item>
      <el-menu-item index="/campus_doctor#part1">外科专家</el-menu-item>
      <el-menu-item index="/campus_doctor#part2">内科专家</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>其他医师</template>
        <el-menu-item index="2-4-1">肛肠医师</el-menu-item>
        <el-menu-item index="2-4-2">口腔医师</el-menu-item>
        <el-menu-item index="2-4-3">心理健康医师</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="news_dynamic">新闻动态</el-menu-item>
    <el-menu-item index="science_world">科普天地</el-menu-item>
    <el-menu-item index="user_login"><el-icon><User  color="blue"/></el-icon>{{User_name? User_name :  "登录/注册"}}</el-menu-item>
  </el-menu>

</template>

<script setup>
import {onMounted, ref} from "vue"
import { onBeforeRouteUpdate } from "vue-router"
import router from "../router";
import {useUserInfoStore} from "@/stores/UserNameStore.js"
const UserInfo = useUserInfoStore();

let activeIndex = ref("/")
const User_name = ref('')

onMounted(() => {
  if(sessionStorage.getItem("Active_menu") != null) {
    activeIndex.value = sessionStorage.getItem("Active_menu");
  }

  if(UserInfo.userName) {
    User_name.value = UserInfo.userName;
  }
})

onBeforeRouteUpdate((to , from , next) => {
  sessionStorage.setItem("Active_menu" , to.path)
  next();
})
</script>

<style scoped>
.el-menu--horizontal {
  --el-menu-horizontal-height: 60px;
  z-index: 99;
}

.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}
.el-menu-demo {
  background: rgba(255, 255, 255, 0.5)
}

</style>