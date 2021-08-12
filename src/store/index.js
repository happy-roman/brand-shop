import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      products: [],
      userCart: [],
    };
  },
  mutations: {
    getProducts(state) {
      return state.products;
    },
    getCart(state) {
      return state.userCart;
    },
    addToCart(state) {
      return state.userCart;
    },
  },
  actions: {
    getProducts(context, url) {
      fetch(url)
        .then((data) => {
          if (!data.ok) throw Error(data.statusText);
          return data.json();
        })
        .then((data) => {
          data.forEach((el) => {
            this.state.products.push(el);
          });
        })
        .catch((error) => {
          console.log(error || 'Поймали ошибку');
        });
      context.commit('getProducts');
    },
    getCart(context, url) {
      fetch(url)
        .then((result) => {
          if (!result.ok) throw Error(result.statusText);
          return result.json();
        }).then((data) => {
          data.content.forEach((el) => {
            this.state.userCart.push(el);
          });
        })
        .catch((error) => {
          console.log(error || 'Поймали ошибку');
        });
      context.commit('getCart');
    },
    addToCart(context, product) {
      const find = this.state.userCart.find(el => el.id_product === product.id_product);
      if (find) {
        fetch(`http://localhost:5000/api/cart/${find.id_product}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ quantity: 1 }),
        }).then(result => result.json())
          .catch((error) => {
            console.log(error);
          });
      } else {
        const prod = Object.assign({ quantity: 1 }, product);
        fetch('http://localhost:5000/api/cart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(prod),
        })
          .then(result => result.json())
          .then((data) => {
            if (data.result === 1) {
              this.state.userCart.push(prod);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
      context.commit('addToCart');
    },
  },
  getters: {
    getProduct(state) {
      return state.product;
    },
  },
  modules: {},
});
