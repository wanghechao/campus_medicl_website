<template>
  <el-row justify="center" style="margin:40px">
    <el-col :span="1">当前位置:</el-col>
    <el-col :span="18">
        <el-breadcrumb separator="/" style="line-height:25px">
            <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
            <el-breadcrumb-item>
            <a href="/">promotion management</a>
            </el-breadcrumb-item>
            <el-breadcrumb-item>promotion list</el-breadcrumb-item>
            <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
        </el-breadcrumb>
    </el-col>
  </el-row>

  <el-row justify="center">
    <el-col :span="6" style="text-align: center">
        <h1>文章标题</h1>
    </el-col>
  </el-row>
  <el-row justify="center" style="color:gray; font-size:15px ; margin-bottom:20px">
    <el-col :span="2">时间:2025-6-20</el-col>
    <el-col :span="2">编辑:阿萨大</el-col>
  </el-row>

  <el-row justify="center">
    <el-col :span="15" style="text-indent:2em; line-height: 35px; ">
      2024年3月11日，经国家药品监督管理局（NMPA）批准，乐普（北京）医疗器械股份有限公司研发的适用于冠脉小血
      <p>管病变的“药物涂层冠脉球囊扩张导管”成功取得中华人民共和国医疗器械注册证，注册证编号：国械注准20243030497。这意味着该产品即将正式进入市场，惠及广大患者。</p>
      <p>管病变的“药物涂层冠脉球囊扩张导管”成功取得中华人民共和国医疗器械注册证，注册证编号：国械注准20243030497。这意味着该产品即将正式进入市场，惠及广大患者。</p>
    </el-col>
  </el-row>

  
</template>

<script setup>

</script>

<style scoped>

</style>