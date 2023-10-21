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
  {
    path: '/telegram-bot',
    component: (async () => await import('./pages/TelegramBot.vue')),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;