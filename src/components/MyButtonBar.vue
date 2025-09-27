<template>
  <div class="button_layout">
    <div class="contain">
      <div class="contain_context">
        <el-row style="bottom: 50px;">
          <el-col :span="24">
            本网站仅供交流学习，如有bug或其他问题请联系我
            <hr>
          </el-col>  
        </el-row>
        <el-row :gutter="24">
          <el-col :span="13">
            联系电话：13434654185<br>
            联系邮箱：3082578126@qq.com
          </el-col>
          <el-col :span="11">其他作品链接：<br> https://github.com/wanghechao?tab=repositories</el-col>
        </el-row>
      </div>
    </div>

  </div>
</template>

<script setup>

</script>

<style scoped>
.button_layout {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 250px;
    background-color: rgba(200, 200, 200, 0.201) ;
}

.contain {
  display: flex;
  align-items: center;
  width: 80%;
  height: 100%;
  text-align: center;
  justify-content: space-around;
  color: rgb(138, 136, 136);
}

.contain_context {
  width: 80%;
}

</style>