import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/fonts',
    component: (async () => await import('./pages/fonts.vue')),
  },
  {
    path: '/quiz',
    component: (async () => await import('./pages/EllaQuizBee.vue')),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;