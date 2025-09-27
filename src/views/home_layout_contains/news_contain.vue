<template>
    <div class="news-container">
      <!-- 标签栏 -->
      <div class="tabs">
        <div
          v-for="(tab, index) in tabs"
          :key="index"
          @mouseenter="handleTabHover(index)"
          class="tab-item"
          :class="{ active: currentTab === index }"
        >
          {{ tab.label }}
        </div>
      </div>
  
      <!-- 分割线 -->
      <div class="divider"></div>
  
      <!-- 新闻列表 -->
      <router-link :to="{name:'artical_detail'}" style="text-decoration:none; color:black">  
      <div class="news-list">
        <div
          v-for="(item, idx) in currentNewsList"
          :key="idx"
          class="news-item"
        >
          <!-- 日期 -->
          <div class="date-box">
            <span class="day">{{ formatDay(item.date) }}</span>
            <span class="year">{{ formatYear(item.date) }}</span>
            <!-- 图片区以后用 -->
            <!-- <img :src="item.image" alt="news" class="news-img" /> -->
          </div>
  
          <!-- 内容区 -->
          <div class="content-box">
            <h3 class="title">{{ item.title }}</h3>
            <p class="desc">{{ item.desc }}</p>
            <div class="extra">
              <span class="hot">热度：{{ item.hot }}</span>
            </div>
          </div>
        </div>
      </div>
    </router-link>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  // 定义标签
  const tabs = ref([
    { label: '公司新闻', key: 'company' },
    { label: '实施前线', key: 'implement' },
    { label: '市场前沿', key: 'market' },
    { label: '行业动态', key: 'industry' }
  ])
  
  // 当前激活的标签索引
  const currentTab = ref(0)
  
  // 模拟不同分类的新闻数据（实际项目可替换为接口请求）
  const newsData = ref({
    company: [
      {
        date: '2025-07-25',
        title: '从“能用”到“好用”：同海EAM如何破解资产密集型行业国产化替代难题？',
        desc: '在电力、核电、石油等国家关键的资产密集型行业，EAM（企业资产管理）系统的国产化替代，已从一道“选择题”变为一道“必答题”。当...',
        hot: 65
      },
      {
        date: '2025-06-30',
        title: '为六大发电集团高质量发展增添数智力量 | 同海新能源智慧生产运营平台“启航”一周年记',
        desc: '在数字化浪潮席卷各行业的时代背景下，同海科技积极响应六大发电集团数字化发展战略，以科技创新为核心驱动，锚定自主可控定位，全力...',
        image: 'https://via.placeholder.com/120x60?text=Company+News+2',
        hot: 626
      },{
        date: '2025-07-25',
        title: '从“能用”到“好用”：同海EAM如何破解资产密集型行业国产化替代难题？',
        desc: '在电力、核电、石油等国家关键的资产密集型行业，EAM（企业资产管理）系统的国产化替代，已从一道“选择题”变为一道“必答题”。当...',
        hot: 65
      },
      {
        date: '2025-06-30',
        title: '为六大发电集团高质量发展增添数智力量 | 同海新能源智慧生产运营平台“启航”一周年记',
        desc: '在数字化浪潮席卷各行业的时代背景下，同海科技积极响应六大发电集团数字化发展战略，以科技创新为核心驱动，锚定自主可控定位，全力...',
        image: 'https://via.placeholder.com/120x60?text=Company+News+2',
        hot: 626
      }
    ],
    implement: [
      {
        date: '2025-08-01',
        title: '实施前线案例1：某大型工厂数字化改造全记录',
        desc: '耗时3个月，覆盖20+产线，从规划到落地的完整实施路径揭秘...',
        image: 'https://via.placeholder.com/120x60?text=Implement+News',
        hot: 123
      },
      {
        date: '2025-07-20',
        title: '实施前线案例2：智慧园区项目交付全流程复盘',
        desc: '涉及5大系统集成，解决10+协同痛点，看同海如何保障项目落地...',
        image: 'https://via.placeholder.com/120x60?text=Implement+News+2',
        hot: 456
      }
    ],
    market: [
      {
        date: '2025-07-16',
        title: '同海“智能搭档”简历大赏',
        desc: '当职场进入智能协作时代，这些“数字同事”正用硬核能力刷新工作效率...',
        image: 'https://via.placeholder.com/120x60?text=Market+News',
        hot: 286
      },
      {
        date: '2025-06-18',
        title: '数智化&自主创新 | 同海国产化数智融合解决方案',
        desc: '伴随国家信息技术应用创新战略推进，自主创新替换基础软件层面...',
        image: 'https://via.placeholder.com/120x60?text=Market+News+2',
        hot: 901
      },{
        date: '2025-07-16',
        title: '同海“智能搭档”简历大赏',
        desc: '当职场进入智能协作时代，这些“数字同事”正用硬核能力刷新工作效率...',
        image: 'https://via.placeholder.com/120x60?text=Market+News',
        hot: 286
      },
      {
        date: '2025-06-18',
        title: '数智化&自主创新 | 同海国产化数智融合解决方案',
        desc: '伴随国家信息技术应用创新战略推进，自主创新替换基础软件层面...',
        image: 'https://via.placeholder.com/120x60?text=Market+News+2',
        hot: 901
      }
    ],
    industry: [
      {
        date: '2025-08-05',
        title: '行业动态：2025年数字化转型新趋势',
        desc: '权威报告解读：AI+大数据如何重塑企业未来...',
        image: 'https://via.placeholder.com/120x60?text=Industry+News',
        hot: 789
      },
      {
        date: '2025-07-30',
        title: '行业动态：绿色能源与数字化融合新机遇',
        desc: '政策驱动下，能源行业如何借数字化实现可持续发展...',
        image: 'https://via.placeholder.com/120x60?text=Industry+News+2',
        hot: 321
      }
    ]
  })
  
  // 监听标签切换
  const handleTabHover = (index) => {
    currentTab.value = index
  }
  
  // 计算当前分类的新闻列表
  const currentNewsList = computed(() => {
    const key = tabs.value[currentTab.value].key
    return newsData.value[key]
  })
  
  // 日期格式化函数
  const formatDay = (dateStr) => {
    const date = new Date(dateStr)
    return (date.getMonth() + 1).toString().padStart(2, '0') + '.' + date.getDate().toString().padStart(2, '0')
  }
  const formatYear = (dateStr) => {
    const date = new Date(dateStr)
    return '——' + date.getFullYear() + '——'
  }
  </script>
  
  <style scoped>
  .news-container {
    width: 90%;
    max-width: 1200px;
    margin: 20px auto;
    font-family: 'Microsoft YaHei', sans-serif;
  }
  
  /* 标签栏样式 */
  .tabs {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    font-size: 25px;
    color: #333;
    margin-bottom: 10px;
  }
  .tab-item {
    cursor: pointer;
    padding-bottom: 8px;
    border-bottom: 2px solid transparent;
    transition: all 0.3s ease;
  }
  .tab-item.active,
  .tab-item:hover {
    color: #409eff;
    border-bottom: 2px solid #409eff;
  }
  
  /* 分割线 */
  .divider {
    height: 1px;
    background: #e5e5e5;
    margin-bottom: 20px;
  }
  
  /* 新闻列表样式 */
  .news-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }

  .news-item:hover {
    cursor: pointer;
    color: #409eff;
  }
  .news-item {
    display: flex;
    gap: 20px;
    padding: 15px;
    border: 1px solid #f2f2f2;
    border-radius: 8px;
    transition: box-shadow 0.3s ease;
  }
  .news-item:hover {
    box-shadow: 0 2px 12px rgba(0,0,0,0.05);
  }
  
  /* 日期样式 */
  .date-box {
    width: 80px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  .day {
    font-size: 28px;
    font-weight: bold;
    color: #409eff;
    display: block;
  }
  .year {
    font-size: 12px;
    color: #999;
  }
  
  /* 内容区样式 */
  .content-box {
    flex: 1;
  }
  .title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
    line-height: 1.4;
  }
  .desc {
    font-size: 14px;
    color: #666;
    margin-bottom: 10px;
    line-height: 1.6;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .extra {
    display: flex;
    align-items: center;
  }
  .news-img {
    width: 60px;
    height: 30px;
    object-fit: cover;
    margin-right: 10px;
  }
  .hot {
    font-size: 12px;
    color: #ff7e00;
  }
  
  /* 响应式适配 */
  @media (max-width: 768px) {
    .news-list {
      grid-template-columns: 1fr;
    }
    .tabs {
      gap: 20px;
      font-size: 16px;
    }
  }
  </style>