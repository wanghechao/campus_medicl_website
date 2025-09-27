<template>
  <div style="margin-top:30px"></div>

  <el-row justify="center" v-for="(item , idx) in 4" :key="item">
    <el-col :span="16">
      <el-card>
        <el-row>
          <el-col :span="2" style="font-size: 14px; color:gray">
            <el-icon size="16"><Clock /></el-icon>
            2025-6-19
          </el-col>

          <el-col :span="7">
            <img src="@/assets/米饭图.jpg" alt="" class="img_show">
          </el-col>
          
          <!-- 右侧文字组合 -->
            <el-col :span="14" class="right_text" :offset="1">
              <router-link :to="{name:'artical_detail' , query:{id : idx}}" style="text-decoration:none;color:black;">
                <span style="font-size:22px; cursor: pointer; " >【人民网-人民健康】全降解封堵器系统上市发布 开启先心病治疗领域新征程</span>
              </router-link>

              <span>【人民网-人民健康】全降解封堵器系统上市发布 开启先心病治疗领域新征程人民网-人民健康】全降解封堵器系统上市发布 开启先心病治疗领域新征程人民网-人民健康】全降解封堵器系统上市发布 开启先心病治疗领域新征程</span>
              
              <span style="margin-left:auto;  cursor: pointer;">
                <router-link :to="{name:'artical_detail'}" style="text-decoration:none; color:skyblue">
                  查看全部
                </router-link>
              </span>
              
            </el-col>
          
        </el-row>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup>

</script>

<style scoped>
.img_show {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.right_text {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  line-height: 30px;
}

.right_text :nth-child(1):hover {
  color: skyblue;
}
</style>