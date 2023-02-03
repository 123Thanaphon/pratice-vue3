import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ForumDetail from '../components/ForumDetail.vue';
import PageNotFound from '../components/PageNotFound.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/MaqeTest.vue'),
    },
    {
      path: '/maqe-test',
      name: 'maqeTest',

      children: [
        {
          path: ':postId',
          name: 'postDetail',
          component: () => import('../components/ForumDetail.vue'),
        }
      ]
    },
    {
      path: "/:pathNotFound(.*)*",
      component: PageNotFound,
    },
  ]
})

export default router
