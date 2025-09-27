<template>
    <div class="css-scroll-container">
      <div class="css-scroll-wrapper" v-for="(item, index) in 10" :key="index">
        <div v-for="(item, index) in doctorList" :key="index" class="scroll-item">
          <img :src="item.img" alt="doctor" />
          <p style="display: flex; justify-content: center;">{{ item.name }}</p>
        </div>
        
      </div>
    </div>
  </template>

<script setup>
import { ref } from "vue";
import doctor_img from "@/assets/doctor.jpg";
import doctor_img2 from "@/assets/doctor2.jpg";
import doctor_img3 from "@/assets/doctor3.jpg";

const doctorList = [{ name: "高红梅", img: doctor_img },
{ name: "周道斌", img: doctor_img2 },
{ name: "王崇慧", img: doctor_img3 },
{ name: "高红梅", img: doctor_img }
]

</script>

  
  <style scoped>
  .css-scroll-container {
    width: 90%;
    max-width: 1200px;
    margin: 20px auto;
    height: 600px;
    overflow: hidden;
  }
  .css-scroll-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
    animation: scrollUp 10s linear infinite;
  }
  /* 关键帧：向上移动一个列表的高度 */
  @keyframes scrollUp {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100%); /* 假设列表高度是容器的 2 倍，向上移动 50% */
    }
  }
  </style>