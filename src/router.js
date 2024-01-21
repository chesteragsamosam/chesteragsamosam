import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/pixel',
    component: async () => await import('./pages/Pixel/Pixel.vue'),
  },
  {
    path: '/fonts',
    component: async () => await import('./pages/FontPage/fonts.vue'),
  },
  {
    path: '/clock',
    component: async () => await import('./pages/Clock/Clock.vue'),
  },
  {
    path: '/battleship',
    component: async () => await import('./pages/Battleship/Battleship.vue'),
  },
  {
    path: '/tic-tac-toe',
    component: async () => await import('./pages/TicTacToe.vue'),
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
  {
    path: '/test',
    component: async () => await import('./pages/Test.vue'),
  },
  {
    path: '/life',
    component: async () =>
      await import('./pages/CellularAutomata/GameOfLife/Life.vue'),
  },
  {
    path: '/color',
    component: async () => await import('./pages/Color/Color.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
