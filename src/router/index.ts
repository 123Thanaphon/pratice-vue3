import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ForumDetail from '../components/ForumDetail.vue';

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
      path: '/maqe-test/',
      name: 'maqeTest',
      component: () => import('../components/MaqeTest.vue'),
    },
    {
      path: '/post/:postId/post-detail/',
      name: 'postDetail',
      component: ForumDetail
    }
  ]
})

export default router
