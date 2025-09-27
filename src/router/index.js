import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

let router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          name:"layout_home",
          path:'/',
          component: () => import("@/views/LayOut/home_layout.vue")
        },
        {
          path:"medicine_classify",
          component: () => import("@/views/LayOut/Medicine_classify.vue"),
          meta:{isauth:true , title: "药品分类"}
        },
        {
          path:"user_login",
          component: () => import("@/views/LayOut/User_login.vue")
        },
        {
          path:"campus_doctor",
          component: () => import("@/views/LayOut/Campus_doctor.vue")
        },
        {
          path:"news_dynamic",
          component: () => import("@/views/LayOut/News_dynamic.vue")
        },
        {
          path:"science_world",
          component: () => import("@/views/LayOut/Science_world.vue"),
        
        },
        {
          name:"artical_detail",
          path:"artical_content",
          component: () => import("@/components/ArticleContent.vue")
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*', // 匹配任意未定义的路由
      redirect: '/' // 重定向到首页，这里首页路径是 '/' ，根据实际首页路由调整
    }
  ],
  scrollBehavior(to , from , savedPosition) {
    return {top:0};
  }
})

router.beforeEach((to, from , next) => {

  // if(to.meta.isauth) {
  //   alert("无权查看")
  // } else {
  //   next()
  // }
  next();
})

export default router
