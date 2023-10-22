import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/fonts',
    component: async () => await import('./pages/FontPage/fonts.vue'),
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
    path: '/font-decovar',
    component: async () => await import('./pages/FontPage/Font-Decovar.vue'),
  },
  {
    path: '/font-roboflex',
    component: async () => await import('./pages/FontPage/Font-RobotoFlex.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
