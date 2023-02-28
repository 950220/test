import { createRouter, createWebHistory } from "vue-router";

let routes= [
  {
    path: '/province',
    name: 'province',
    //使用import可以路由懒加载，如果不使用，太多组件一起加载会造成白屏
    component: () => import('../view/province.vue')
  },
  {
    path: '/city',
    name: 'city',
    component: () => import('../view/city.vue')
  },
  {
    path: '/station',
    name: 'station',
    component: () => import('../view/station.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('../view/404.vue'),
  }
]
// 路由
const router = createRouter({
    history: createWebHistory(),
    routes
})
// 导出
export default router 