import {
  createRouter,
  createWebHistory,
  RouteRecordRaw
} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/pages/Home.vue')
  },
  {
    path: '/test',
    component: () => import('@/pages/Test.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
