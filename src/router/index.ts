import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: "*",
    //   component: '<p>Page Not Found</p>'
    // },
    {
      path: '/maqe-test',
      name: 'maqe-test',
      component: () => import('../components/MaqeTest.vue'),
      children: [

      ]
    }
  ]
})

export default router
