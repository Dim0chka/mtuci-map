import { createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/Main.vue'
import Body from '../pages/Body.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Main
  },
  {
    path: '/:name',
    component: Body
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
