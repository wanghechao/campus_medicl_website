<template>
  <div class="main">

      <!-- 顶部登录与注册切换按钮 -->
      <el-card style="width: 70vh" v-if="login_user_page">
        <template #header>
          <div class="card-header">
            <span ><el-button @click="login_btn_click" :bg="bg_is_show" text :type="type_val" size="large">登录</el-button></span>
            <span><el-button  @click="regist_btn_click" :bg="!bg_is_show" text :type="type_val2" size="large">注册</el-button></span>
          </div>
        </template>
       <!-- 表单内容 -->
       <el-carousel  ref="MyCarousel" trigger="click" indicator-position="none" arrow="never" :autoplay="false" height="500px">
        <!-- 登录页面 -->
          <el-carousel-item>
            <div class="login_content">

              <h1 style="font-size:30px;  text-shadow:0px 5px 18px gray">登录</h1>

              <el-form size="large" :model="form" label-width="auto" class="login_form" :rules="login_rule" ref="login_form"> 

                <el-form-item label="账号:" prop="name">
                  <el-input v-model="form.name" placeholder="请输入账号"/>
                </el-form-item>

                <el-form-item label="密码:" prop="password">
                  <el-input v-model="form.password" type="password" placeholder="请输入密码"/>
                </el-form-item>

                <el-form-item>
                  <el-button @click="login_submit" class="submit" type="primary" round >登录</el-button>
                </el-form-item>

                <el-form-item class="login_bottom">
                    <span>忘记密码?</span>
                    <span @click="regist_btn_click">还没有账号?去注册</span>
                </el-form-item>
                
              </el-form>

            </div>
          </el-carousel-item>

          <!-- 注册页面 -->
          <el-carousel-item>
            <div class="regist_content">

              <h1 style="font-size:30px;  text-shadow:0px 5px 18px gray">注册</h1>

              <el-form size="large" :model="regist_form" label-width="auto" class="login_form" :rules="regist_rule" ref="ref_regist_form"> 

                <el-form-item label="账号:" prop="name">
                  <el-input v-model="regist_form.name" placeholder="请输入账号"/>
                </el-form-item>

                <el-form-item label="密码:" prop="password">
                  <el-input v-model="regist_form.password" type="password" placeholder="请输入密码"/>
                </el-form-item>

                <el-form-item label="确认密码:" prop="re_password">
                  <el-input v-model="regist_form.re_password" type="password" placeholder="请输入确认密码"/>
                </el-form-item>

                <el-form-item>
                  <el-button class="submit" type="primary" round @click="regist_submit">注册</el-button>
                </el-form-item>

                <el-form-item class="login_bottom">
                    <span @click="login_btn_click">已有账号?去登录</span>
                </el-form-item>
                
              </el-form>

            </div>
          </el-carousel-item>

        </el-carousel>
       
      </el-card>

      <!-- 登录后，个人中心页面 -->
      <UserCenterVue @login_out_usermeg = "change_login_page" v-else />
      

  </div>
</template>

<script setup>
import UserCenterVue from "@/components/UserCenter.vue";
import { nextTick, onMounted, reactive, ref } from "vue";
import {user_regist , user_login} from "@/api/user.js"
import { useTokenStore } from "@/stores/TokenStore.js"
import router from "../../router";
const TokenStore = useTokenStore();

onMounted(async () => {
  if(TokenStore.token) {
    login_user_page.value = false;
  }
  
})

const form = ref({
  name: "",
  password:""
})

const regist_form = ref({
  name:"",
  password: "",
  re_password:""
})

const login_user_page = ref(true);

const change_login_page = (mes) => {
  login_user_page.value = true;
}


// 清空登录与注册表单
const clear_form = () => {
  form.value = {
    name: "",
    password:""
  }
}
const clear_regist_form = () => {
  regist_form.value = {
  name:"",
  password: "",
  re_password:""
}
}

// 控制登录与注册页面切换按钮显示
let bg_is_show = ref(true);
let type_val = ref("primary") 
let type_val2 = ref("default") 

const MyCarousel = ref(null);
const login_form = ref(null)
const ref_regist_form = ref(null)

// 登录与注册页面切换
const login_btn_click = () => {
  type_val.value = "primary";
  type_val2.value = "default";
  bg_is_show.value = true;

  MyCarousel.value.setActiveItem(0);
}
const regist_btn_click = () => {
  type_val.value = "default";
  type_val2.value = "primary";
  bg_is_show.value = false;

  MyCarousel.value.setActiveItem(1);
}

// 登录请求发起
const login_submit = async () => {
  try {
    await login_form.value.validate()
    let login_result = await user_login(form.value)

    if(login_result.code == 200) {
      // 将token用pinia保存起来
      TokenStore.setToken(login_result.data)
      window.location.reload()
      
      login_user_page.value = false;
      ElMessage({
        showClose: true,
        message: '登录成功',
        type: 'success',
      })
    }
   
  }catch {
    ElMessage({
      showClose: true,
      message: '请输入正确账号与密码',
      type: 'error',
    })
  }
  
}
// 注册请求发起
const regist_submit = async() => {
  
  try {
    await ref_regist_form.value.validate()
    // 如果上行代码校验成功,下面代码将向后端发起注册请求
    let regist_result = await user_regist(regist_form.value)

    //判断后端有没有传成功，成功后判断后端data里有没有信息
    if(regist_result.code == 200) {
      ElMessage({
        showClose: true,
        message: regist_result.data ?  regist_result.data : '账号注册成功',
        type: 'success',
      })

      //清空登录页表单，将刚刚注册成功的账号密码填入登录页,清空注册表单，然后切换到登录页
      await clear_form();
      form.value = {
          name: regist_form.value.name,
          password:regist_form.value.password
      }
      clear_regist_form();
      login_btn_click();
    }
    
  }catch {
    ElMessage({
      showClose: true,
      message: '请输入正确账号与密码',
      type: 'error',
    })
  }
  
}

// 登录表单校验
const validate_login_name = (rule , val , callback) => {
  if(!val) {
    callback(new Error('请输入账号'))
  }

  callback()
}

const validate_login_password = (rule , val , callback) => {
  if(!val) {
    callback(new Error('请输入密码'))
  }
  const numVal = Number(val); 
   if (isNaN(numVal) || !Number.isInteger(numVal)) { 
    callback(new Error('请输入数字而非文字'))
  } else if (val.length < 6 || val.length > 11) { 
    callback(new Error('请密码位数在 6-11 位之间'))
  } else {
    callback()
  }

}

const login_rule = ({
  name:[{validator: validate_login_name , trigger: 'blur'}],
  password:[{validator: validate_login_password , trigger: 'blur'}]
})


// 注册表单校验
const validate_name = (rule , val , callback) => {
  if(!val) {
    return callback(new Error('请输入账号'))
  }
  callback()

}
// 密码规则
const validate_password = (rule , val , callback) => {
  if(!val) {
    return callback(new Error('请输入密码'))
  }

    // 转成数值
    const numVal = Number(val); 
  // 先判断是否是有效数值，再判断是否是整数
  if (isNaN(numVal) || !Number.isInteger(numVal)) { 
    callback(new Error('请输入数字而非文字'))
  } else if (val.length < 6 || val.length > 11) { 
    // 注意：这里用 val.length 校验长度，因为转成数值后长度判断失效
    callback(new Error('请密码位数在 6-11 位之间'))
  } else {
    callback()
  }
  
}
// 二次确认密码规则
const validate_repassword = (rule , val , callback) => {
  if(!val) {
    return callback(new Error('请输入确认密码'))
  }else if(val !== regist_form.value.password) {
    return callback(new Error("两次密码不相同"))
  }else {
    callback()
  }
  
}
// 配置校验规则
const regist_rule =({
  name:[{validator : validate_name , trigger : 'blur'}],
  password:[{validator : validate_password , trigger: 'blur'}],
  re_password: [{validator : validate_repassword , trigger: 'blur'}]
})



</script>

<style scoped>
.main {
  height: 80vh;
  background-color: aliceblue;
  background-size: 400%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-header {
  width: 100%;
  display: flex;
}

.card-header :nth-child(n) {
  display: block;
  width: 100%;
}

.login_content {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.login_form{
  width: 70%;
  height: 40vh;
}

.login_form > :nth-child(n) {
  margin: 40px;
}

.submit {
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50% , -50%);
  width: 30vh;
}

.login_bottom > :nth-child(2) {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}


.regist_content {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>