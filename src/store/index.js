import Vue from 'vue';
import Vuex from 'vuex';
import userCart from './modules/user-cart';
import productsStore from './modules/products';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    products: productsStore,
    cart: userCart,
  },
  state() {
    return {
      userAuth: false,
    };
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
});

store.dispatch('products/getProducts');
store.dispatch('cart/getCart');

export default store;
