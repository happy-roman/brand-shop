import HomePage from '@/pages/HomePage.vue';
import UserCart from '@/pages/UserCartPage.vue';
import ProductPage from '@/pages/ProductPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    alias: '/home',
  },
  {
    path: '/user-cart',
    name: 'user-cart',
    component: UserCart,
  },
  {
    path: '/goods/:id',
    name: 'goods',
    component: ProductPage,
    props: true,
  },
  { path: '/:catchAll(.*)', redirect: '/home' },
];
export default routes;
