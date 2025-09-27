<template>
    
    <el-container>
      <el-header> <MyNavigationBar /> </el-header>

      <el-main ><router-view /></el-main>
      
      <el-footer><MyButtonBar /></el-footer>
    </el-container>

</template>

<script setup>
import {ref , onBeforeMount } from "vue"
import {ElLoading} from "element-plus"
// v-loading.fullscreen = "false"
const loading = ref(true)

onBeforeMount(() => {
  const loading = ElLoading.service({
    text: '加载中。。。',
    background: 'rgba(0, 0, 0, 0.6)',
  })
   setTimeout(() => {
    loading.close()
  }, 1500);
})

 
  
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}



</style>