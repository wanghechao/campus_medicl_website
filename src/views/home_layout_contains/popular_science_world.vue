<template>
    <div class="medical-info-container">
      <!-- 医联论健区域 -->
      <div class="section">
        <div class="section-header">
          <span class="header-title">医联论健</span>
          <span class="more">更多>></span>
        </div>
        <router-link :to="{name:'artical_detail'}" style="text-decoration:none; color:black"> 
        <div class="concern-area">
          <p class="concern-desc">体检不走过场，健康更有保障</p>
          <ul class="news-list">
            <li>重金属超标！女子戴项链引发“首饰病”，医生：不要长时间佩戴</li>
            <li>阴天不需要防晒？</li>
            <li>如何预防儿童乳牙龋病？三个方面要注意</li>
          </ul>
        </div>
      </router-link>
      </div>
  
      <!-- 医院大全区域 -->
      <div class="section">
        <div class="section-header">
          <span class="header-title">医院大全</span>
          <span class="more">更多>></span>
        </div>
        <router-link :to="{name:'artical_detail'}" style="text-decoration:none; color:black">
        <div class="hospital-img-area">
          <img src="@/assets/米饭图.jpg" alt="手术场景" class="hospital-img" />
          <p class="img-desc">世界首例腰上种牙再移植手术在我...</p>
        </div>
      </router-link>
      </div>
  
      <!-- 热点专题区域 -->
      <div class="section">
        <div class="section-header">
          <span class="header-title">热点专题</span>
          <span class="more">更多>></span>
        </div>
        <router-link :to="{name:'artical_detail'}" style="text-decoration:none; color:black"> 
        <div class="topic-area">
          <div class="topic-item">
            <img src="@/assets/米饭图.jpg" alt="眼镜" class="topic-img" />
            <span>中医药近视防控迈入新阶段</span>
          </div>
          <ul class="topic-news-list">
            <li>小满未满，祛湿防寒</li>
            <li>不良体态正悄悄损害你的健康</li>
            <li>让患者 “转得上去，留得下来”！三甲专家下沉社区医院，盘活基层诊疗</li>
          </ul>
        </div>
      </router-link>
      </div>
    </div>

    <div class="advertisement-image">
      <img src="@/assets/广告图.png" alt="" style="height:100%; max-width:100%">
    </div>
  </template>
  
  <script>

  </script>
  
  <style scoped>
.advertisement-image {
  width: 90%;
    max-width: 1200px;
    margin: 20px auto;
}

  .medical-info-container {
    width: 90%;
    max-width: 1200px;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  
  .section {
    flex: 1;
    margin: 0 10px;
  }
  
  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    border-bottom: 1px solid #409eff;
  }
  
  .header-title {
    background-color: #409eff;
    color: #fff;
    padding: 15px 10px;
    border-radius: 5px 5px 0 0;
  }
  
  .more {
    color: #999;
    cursor: pointer;
    font-size: 15px;
  }
  
  .concern-area {
    font-size: 18px;
  }
  .concern-desc:hover {
    cursor: pointer;
    color: #409eff;
  }

  .concern-desc {
    margin-bottom: 20px;
    font-size: 25px;
  }
  
  .news-list {
    list-style: none;
    padding: 0px;
  }
  
  .news-list li {
    margin-bottom: 15px;
    padding-top: 5px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(128, 128, 128, 0.300);
  }
  .news-list li:hover {
    cursor: pointer;
    color: #409eff;
  }
  
  .hospital-img {
    width: 100%;
    height: auto;
  }
  
  .topic-area {
    font-size: 18px;
  }

  .img-desc {
    margin-top: 10px;
    line-height: 1.5;
  }

  
  .topic-item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  .topic-item :hover {
    cursor: pointer;
    color: #409eff;
  }
  
  .topic-img {
    width: 120px;
    height: 80px;
    margin-right: 10px;
  }
  
  .topic-news-list {
    list-style: none;
    padding: 0;
  }
  
  .topic-news-list li {
    margin-bottom: 15px;
    padding-top: 5px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(128, 128, 128, 0.300);
  }

  .topic-news-list li:hover {
    cursor: pointer;
    color: #409eff;
  }
  </style>