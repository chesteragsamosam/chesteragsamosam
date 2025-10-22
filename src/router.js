import { createRouter, createWebHashHistory } from 'vue-router'
console.log('Router loaded')
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
    component: async () => await import('./pages/TicTacToe/TicTacToe.vue'),
  },
  {
    path: '/quiz',
    component: async () => await import('./pages/EllaQuizBee.vue'),
  },
  {
    path: '/sudoku',
    component: async () => await import('./pages/Sudoku/Sudoku.vue'),
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
    component: async () => await import('./pages/CellularAutomata/GameOfLife/Life.vue'),
  },
  {
    path: '/color',
    component: async () => await import('./pages/Color/Color.vue'),
  },
  {
    path: '/regex',
    component: async () => await import('./pages/Regex/Regex.vue'),
  },
  {
    path: '/hamming-code',
    component: async () => await import('./pages/HammingCode.vue'),
  },
  {
    path: '/swiss-manager',
    component: async () => await import('./pages/SwissManager/SwissManager.vue'),
  },
  {
    path: '/',
    component: async () => await import('@pages/index.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
