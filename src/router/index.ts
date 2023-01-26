import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DemoRouteView from '../views/DemoVueRoute.vue';
import DemoVueRouteCallByName from '../views/demoVueRouteCallByName.vue';
import DemoVueRouteCallById from '../views/DemoVueRouteCallById.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/demo-route',
      name: 'demo-route',
      component: DemoRouteView,
    },
    {
      path: '/demoVueRouteCallByName',
      name: 'demoVueRouteCallByName',
      component: DemoVueRouteCallByName,
    },
    {
      path: '/demo-route-with-id/:testid',
      name: 'demoRouteWithId',
      component: DemoVueRouteCallById,
    },
  ]
})

export default router
