const cartStore = {
  namespaced: true,
  state() {
    return {
      userCart: [],
    };
  },
  getters: {
    userCart(state) {
      return state.userCart;
    },
  },
  mutations: {
    getCart(state, data) {
      state.userCart = data;
    },
    addToCart(state) {
      return state.userCart;
    },
    removeFromCart(state) {
      return state.userCart;
    },
  },
  actions: {
    getCart(context, url = 'http://localhost:5000/api/cart') {
      fetch(url)
        .then((result) => {
          if (!result.ok) throw Error(result.statusText);
          return result.json();
        })
        .then((data) => {
          context.commit('getCart', data.content);
        })
        .catch((error) => {
          console.log(error || 'Поймали ошибку');
        });
    },
    addToCart(context, product) {
      const find = context.state.userCart.find(el => el.id_product === product.id_product);
      if (find) {
        fetch(`http://localhost:5000/api/cart/${find.id_product}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ quantity: product.quantity || 1 }),
        })
          .then(result => result.json())
          .then((data) => {
            if (data.result === 1) {
              find.quantity += product.quantity || 1;
            }
          })
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
              context.state.userCart.push(prod);
            }
          })
          .catch((error) => {
            console.log(error);
          });
        context.commit('addToCart');
      }
    },
    removeFromCart(context, product) {
      const find = context.state.userCart.find(el => el.id_product === product.id_product);
      if (find.quantity > 1) {
        fetch(`http://localhost:5000/api/cart/${find.id_product}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ quantity: -1 }),
        })
          .then(result => result.json())
          .then((data) => {
            if (data.result === 1) {
              find.quantity -= 1;
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        fetch(`http://localhost:5000/api/cart/${product.id_product}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(res => res.json())
          .then((data) => {
            if (data.result === 1) {
              context.state.userCart.splice(context.state.userCart.indexOf(product), 1);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
      context.commit('removeFromCart');
    },
  },
};
export default cartStore;
