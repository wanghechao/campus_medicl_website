<template>
  <el-row> 
    <el-col :span="24">
       <div class="lable_btn"><slot>默认标签</slot></div>
    </el-col>
  </el-row>
</template>

<script>

</script>

<style scoped>
.lable_btn {
  color: white;
  background-color: rgb(147, 186, 255);
  line-height:60px;
  text-align: center;
  height: 60px;
  width: 200px;
  border-radius: 50px;
  font-size: 25px;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  cursor: pointer;
  border: 1px solid rgb(147, 186, 255);
}

.lable_btn:hover {
  background-color: aliceblue;
  color: rgb(147, 186, 255);
  border: 1px solid rgb(147, 186, 255);
}
</style>