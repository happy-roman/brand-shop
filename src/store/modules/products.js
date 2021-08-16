const productsStore = {
  namespaced: true,
  state() {
    return {
      products: [],
    };
  },
  getters: {
    products(state) {
      return state.products;
    },
  },
  mutations: {
    getProducts(state, data) {
      data.forEach((el) => {
        state.products.push(el);
      });
    },
  },
  actions: {
    getProducts(context, url = 'http://localhost:5000/api/products') {
      fetch(url)
        .then((data) => {
          if (!data.ok) throw Error(data.statusText);
          return data.json();
        })
        .then((data) => {
          context.commit('getProducts', data);
        })
        .catch((error) => {
          console.log(error || 'Поймали ошибку');
        });
    },
  },
};
export default productsStore;
