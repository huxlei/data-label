import { createRouter, createWebHistory } from 'vue-router'

// 导入页面组件
const Hello = () => import('@/views/HelloWorld.vue')

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Hello
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router