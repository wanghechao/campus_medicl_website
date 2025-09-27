<template>
  <div class="user_content">

    <el-container>
        <!-- 侧边栏 -->
      <el-aside width="200px">
        <el-scrollbar>
            <el-menu default-active="1">
                <el-menu-item index="1">
                    用户中心
                </el-menu-item>
                <el-menu-item  disabled index="2">
                    系统设置
                </el-menu-item>
            </el-menu>
        </el-scrollbar>
      </el-aside>

      <!-- 头部 -->
        <el-container>
            <el-header style="padding:0">
                <el-row style=" padding:20px; border-bottom:1px solid gray;">
                    <el-col>
                        用户中心
                    </el-col>
                </el-row>
            </el-header>
        <!-- 主内容 -->
        <el-main>
            <!-- 头像 -->
            <el-row justify="center" style="margin:30px;  transform: translateX(-40px);">
                <el-col :span="1" ><el-avatar :size="100" :src="img" /></el-col>
            </el-row>

            <!-- 用户修改数据页 -->
            <el-row justify="center" v-if="change_edit">
                <el-col :span="15">
                    <el-form :model="form" label-width="auto" style="max-width: 400px">
                        <el-form-item>
                            <el-upload v-model:file-list="file_list" style="margin-left:90px" :limit="1"
                                    :show-file-list="false"
                                    :http-request="handleManualUpload"
                                    :on-exceed="handleExceed" 
                                    :auto-upload="true" 
                                    accept="image/jpg,image/png">
                                <template #trigger>
                                    <el-button type="primary">上传头像</el-button>
                                </template>

                                <template #tip>
                                <div class="el-upload__tip">
                                    仅支持jpg/png文件格式,且大小不超过500KB
                                </div>
                                </template>
                            </el-upload>
                        </el-form-item>

                        <el-form-item label="姓名:">
                            <el-input v-model="form.name"  />
                        </el-form-item>
                        
                        <el-form-item label="年龄:">
                            <el-input-number v-model="form.age" :min="1" :max="200" />
                        </el-form-item>

                        <el-form-item label="性别:">
                            <el-radio-group v-model="form.gender">
                                <el-radio value="男">男</el-radio>
                                <el-radio value="女">女</el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="电话号码:">
                            <el-input v-model="form.phone_number"  />
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
            <!-- 用户数据页 -->
            <el-row justify="center" v-else>
                <el-col :span="6">
                    <el-form :model="form" label-width="auto" style="max-width: 700px">
                        <el-form-item label="姓名:">
                            <el-text>{{form.name}}</el-text>
                        </el-form-item>
                        
                        <el-form-item label="年龄:">
                            <el-text>{{form.age}}</el-text>
                        </el-form-item>

                        <el-form-item label="性别:">
                            <el-text>{{form.gender}}</el-text>
                        </el-form-item>

                        <el-form-item label="电话号码:">
                            <el-text>{{form.phone_number}}</el-text>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>

            <!-- 底部按钮 -->
            <el-row justify="space-around" style="margin-top:40px">
                <el-col :span="3"> 
                    <el-button type="primary" v-if="change_edit" @click="save_edit">保存</el-button>
                    <el-button type="primary" v-else @click="change_edit = true">修改</el-button>
                </el-col>

                <el-col :span="3"> 
                    <el-button type="danger" @click="login_out">退出登录</el-button>
                </el-col>
            </el-row>
        </el-main>
      </el-container>
    </el-container>


    </div>
</template>

<script setup>
import avatarImg from "@/assets/米饭图.jpg"
import { nextTick, onMounted, ref } from "vue"
import {useTokenStore} from "@/stores/TokenStore.js"
import {useUserInfoStore} from "@/stores/UserNameStore.js"
import {upload_avatar} from "@/api/user.js"
const TokenStore = useTokenStore();
const UserInfo = useUserInfoStore();

import { user_edit_message , change_user_info , } from "@/api/user.js";

// 退出登录按钮,子传父
const emit = defineEmits(["login_out_usermeg"])


// 默认头像
const img = ref(avatarImg)
// 用户头像处理
const file_list = ref([])

const handleManualUpload = async (e) => {
   const file = e.file;

//    发送头像上传请求
   try{
    const res = await upload_avatar(file)
    console.log(res.data);

    ElMessage({
        showClose: true,
        message: '头像上传成功',
        type: 'success',
      })

   if(file_list.value.length == 0) {
    file_list.value.push({
        name:file.name,
        url: res.data.url
    })
   }


   }catch(err) {
    ElMessage({
        showClose: true,
        message: '头像上传失败，请联系管理员',
        type: 'warning',
      })
    return Promise.reject(err)
   }
   
} 

// 头像数量为1，超出则重新上传头像
const handleExceed = (files) => {
    file_list.value = [];
    const rawFile = files[0]; // 关键：取原生 File 对象
    if (!rawFile) {
            ElMessage.warning('文件无效，请重新选择');
            return;
            }
  handleManualUpload({ file: rawFile }); // 模拟 e 的结构
}

onMounted(async () => {
    
    const res = await user_edit_message();
    form.value.user_id = res.data.userId;
    form.value.name = res.data.userName;
    form.value.age = res.data.userAge;
    form.value.gender = res.data.userGender;
    form.value.phone_number = res.data.userPhone;

    // 将用户名保存到pinia仓库持久化
    UserInfo.setUserName(res.data.userName);
})

const change_edit = ref(false)

const form = ref({
    user_id: 1,
    name:"默认用户名",
    age: 12 ,
    gender: "男",
    phone_number: "123123"
})

// 修改用户信息保存
const save_edit = async () => {
//    const res =  await change_user_info(form.value)
//    console.log(res);

    change_edit.value = false;
    
}
// 退出登录
const login_out = () => {
    if(TokenStore.token) {
        TokenStore.removeToken();
    }
    if(UserInfo.userName) {
        UserInfo.removeUserName();
    }
    
    emit('login_out_usermeg' , false)
    window.location.reload()
}
</script>

<style scoped>
.user_content {
    width: 100vh;
    height: 70vh;
    background: white;
    box-shadow: 0px 0px 10px rgb(131, 131, 131) ;
}
.user_content :nth-child(1) {
    text-align: center;
}

</style>