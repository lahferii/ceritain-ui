import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/homePage.vue')
  },
  {
    path: '/upload',
    name: 'upload',
    component: () => import('../views/uploadPage.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router