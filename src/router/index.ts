import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DemoRouteView from '../views/DemoVueRoute.vue';
import DemoVueRouteCallByName from '../views/demoVueRouteCallByName.vue';
import DemoVueRouteCallById from '../views/DemoVueRouteCallById.vue';
import { nextTick } from 'vue';

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
      meta: { requiresAuth: true },
      // beforeEnter: (to, from, next) => {
      //   next();
      //   // return { name: 'profile' };
      // },
    },
    {
      path: '/user/:testid/',
      name: 'normal',
      component: DemoVueRouteCallById,
      children: [
        {
          path: 'profile',
          name: 'profile',
          component: DemoVueRouteCallById
        },
        {
          // UserPosts will be rendered inside User's <router-view>
          // when /user/:id/posts is matched
          path: '/posts',
          component: DemoRouteView
        }
      ]
    },
  ],
})

router.beforeEach((to, from, next) => {
  // instead of having to check every route record with
  // to.matched.some(record => record.meta.requiresAuth)
  if (to.meta.requiresAuth) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return next('/');
  }

  next();
})

export default router
