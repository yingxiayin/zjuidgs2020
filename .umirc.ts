import { defineConfig } from 'umi/lib/defineConfig';
import theme from './src/themes/theme';

export default defineConfig({
  title: '「另存为」浙大工设2020毕业设计展',
  locale: {
    antd: true,
  },
  dva: {
    hmr: true,
  },
  cssLoader: {
    localsConvention: 'camelCase',
  },
  polyfill: {
    imports: ['core-js/stable'],
  },
  theme: theme,
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      component: '@/pages/home',
    },
    {
      path: '/content',
      component: '@/pages/content',
    },
    {
      path: '/detail/:id',
      component: '@/pages/detail',
    },
  ],
  base: '/',
  publicPath: '/',
  history: { type: 'hash' },
});
