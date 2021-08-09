import Home from '@/pages/Home.vue';
import UserCart from '@/pages/UserCart.vue';
import SinglePage from '@/pages/SinglePage.vue';
import Product from '@/components/Product.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/user-cart',
    name: 'user-cart',
    component: UserCart,
  },
  {
    path: '/single-page',
    name: 'single-page',
    component: SinglePage,
  },
  {
    path: 'product',
    name: 'product',
    component: Product,
  },
];
export default routes;
