import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/fonts',
    component: async () => await import('./pages/fonts.vue'),
  },
  {
    path: '/quiz',
    component: async () => await import('./pages/EllaQuizBee.vue'),
  },
  {
    path: '/qr',
    component: async () => await import('./pages/QRCode/QRCode.vue'),
  },
  {
    path: '/totp',
    component: async () => await import('./pages/TOTP/TOTP.vue'),
  },
  {
    path: '/telegram-bot',
    component: async () => await import('./pages/TelegramBot.vue'),
  },
  {
    path: '/font',
    component: async () => await import('./pages/FontPage/Font.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
