<template>
  <!-- 视频页与搜索框 -->
  <el-row>
    <el-col :span="24" >
      <div class="search">
        <video class="video_back" preload="auto" loop playsinline autoplay muted src="@/assets/video.mp4"> </video>
        
          <el-input v-model="input" class="input_style" placeholder="搜索药品">
            <template #suffix>
              <el-anchor :offset="200" :marker=false>
                <el-anchor-link  :href="`#here`" >
                  
              <el-button type="primary" plain round :href="`#here`"> 搜索</el-button>
                </el-anchor-link>
              </el-anchor>
              
            </template>

          </el-input>
      </div>
    </el-col>
  </el-row>

  <!-- 自动下拉按钮 -->
  <el-row justify="center">
    <el-col :span="7" :offset="2" >
      
        <el-anchor :offset="200" :marker=false>
          <el-anchor-link  :href="`#here`" > 
                <el-icon color="blue" class="down_icon" v-if="isshow_icon"  size="60px"><ArrowDownBold /></el-icon>
                <h1 v-else  style="font-size:25px ; letter-spacing:2px ; opacity: 0.8;">但愿世上无疾苦 宁可架上药生尘</h1>
          </el-anchor-link>
        </el-anchor>
     
    </el-col>
  </el-row>

  <!-- 药品筛选 -->
  <el-row justify="center">
    <el-col :span="2" :offset="2"><h1>药品筛选: </h1> </el-col>

    <el-col :span="4" style="transform:translateY(20%)" >

      <el-checkbox-group v-model="checkList"  :max="1"> 
        <el-checkbox  label="处方药" value="val1" size="large" border />
        <el-checkbox  label="非处方药" value="val2" size="large" border />
      </el-checkbox-group>

    </el-col>

    <el-col :span="2"><h1>对症下药: </h1> </el-col>
    <el-col :span="3" style="transform:translateY(25%)">
      
      <el-select
        v-model="checkMedicines"
        multiple
        clearable
        collapse-tags
        placeholder="选择症状"
        :max-collapse-tags="2"
        style="width: 280px"
      >
          <el-option
          v-for="item in medicines"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      
    </el-col>

    <el-col :span="2" :offset="1" style="transform:translateY(25%)">
      <el-button type="primary">
        搜索
      </el-button>
    </el-col>
  </el-row>

  <!-- 药品展示 -->
   <el-row justify="center" id="here">
     <el-col :span="4" :offset="1" v-for=" val in tableData" :key = val>
      <el-card style="max-width: 300px">
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          style="width: 100%"
        />

        <template #header>
          <el-row justify="space-between">
            <el-col :span="12">{{val.medicineName}}</el-col>
            <el-col :span="10"> <el-tag type="primary">{{val.medicineType}}</el-tag></el-col>
          </el-row>
        </template>
        <template #footer>
          <el-row justify="space-between">
            <el-col :span="10">价格:{{val.price}}</el-col>
            <el-col :span="10">库存:{{val.inventory}}</el-col>
          </el-row>
        </template>
      </el-card>
     </el-col>
   </el-row>

   <!-- 分页栏 -->
   <el-row justify="center" style="margin:50px">
      <el-col :span="4" >
        <el-pagination background layout="slot, prev, pager, next ,jumper"
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange">
          <span>共有 {{totalPage}} 页 </span>
        </el-pagination>
      </el-col>
   </el-row>
</template>

<script setup>
import {ref , onMounted, computed} from "vue";
import {animate3}  from "@/utils/animateFn.js"
import { getMedcinePage } from "@/api/medicine.js";

let isshow_icon = ref(true)
onMounted(() => {
  isshow_icon = animate3(".down_icon")
  getPageData()
})

// 分页设置
// 响应式数据
const currentPage = ref(1) // 当前页码
const pageSize = ref(8)   // 每页条数
const total = ref(0)      // 总条数
const tableData = ref([]) // 表格数据


// 获取数据的方法
const getPageData = async () => {
  try {
    // 调用后端分页接口，传递 currentPage、pageSize
    const res = await getMedcinePage(currentPage.value , pageSize.value)

    const { data } = res
    console.log(data);
    tableData.value = data.list // 表格数据
    total.value = data.total    // 总条数

  } catch (error) {
    console.error('请求失败：', error)
  }
}

// 监听每页条数改变
const handleSizeChange = (newSize) => {
  pageSize.value = newSize
  getPageData() // 重新请求数据
}

// 监听页码改变
const handleCurrentChange = (newPage) => {
  currentPage.value = newPage
  getPageData() // 重新请求数据
}

// 计算总页数（可选，用于插槽显示）
const totalPage = computed(() => {
  return Math.ceil(total.value / pageSize.value)
})

// window.scrollTo(0,0)

const input = ref('')
const checkList = ref([])

const checkMedicines = ref([])
const medicines = ref([
  {
    lable:"头疼",
    value:"头疼"
  },{
    lable:"肚子疼",
    value:"肚子疼"
  },{
    lable:"跌打损伤",
    value:"跌打损伤"
  },{
    lable:"皮肤用药",
    value:"皮肤用药"
  }
])

</script>

<style scoped>
.search {
  overflow: hidden;
  position: relative;
  height: 85vh;
}
.video_back {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 800px;
}

 .input_style {
  position: absolute;
  left: 50%;
  bottom: 20%;
  transform: translate(-50% , -50%);
  width: 40vw;
  height: 50px;
  border-style: none;
  outline: none;
  opacity: 0.8;
}

.down_icon {
  left: 35%;
  opacity: 0.5;
  cursor: pointer;
  animation: down_anima 2s  infinite;
}

@keyframes down_anima {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(10px);
  }
}
</style>