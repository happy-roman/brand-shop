<template>
  <div id="app">
    <header-block/>
    <navigation/>
    <router-view/>
    <subscribe/>
    <footer-block/>
  </div>
</template>

<script>
import HeaderBlock from '@/blocks/Header-block.vue';
import Navigation from '@/blocks/Navigation.vue';
import Subscribe from '@/blocks/Subscribe.vue';
import FooterBlock from '@/blocks/Footer-block.vue';

export default {
  components: {
    HeaderBlock,
    Navigation,
    Subscribe,
    FooterBlock,
  },
  data() {
    return {
      urlApi: 'http://127.0.0.1:5000/',
    };
  },
  provide() {
    return {
      getJson: this.getJson,
      postJson: this.postJson,
      putJson: this.putJson,
      deleteJson: this.deleteJson,
      addToCart: this.addProduct,
    };
  },
  methods: {
    getJson(url = 'api/products') {
      return fetch(`${this.urlApi}${url}`, {
      })
        .then((result) => {
          if (!result.ok) throw Error(result.statusText);
          return result.json();
        })
        .catch((error) => {
          console.log(error || 'Поймали ошибку');
        });
    },
    postJson(url, data) {
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then(result => result.json())
        .catch((error) => {
          console.log(error);
        });
    },
    putJson(url, data) {
      return fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then(result => result.json())
        .catch((error) => {
          console.log(error);
        });
    },
    deleteJson(url) {
      return fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(result => result.json())
        .catch((error) => {
          console.log(error);
        });
    },
    addProduct(product) {
      const find = this.$cicartItems.find(el => el.id_product === product.id_product);
      if (find) {
        this.$parent.putJson(`/api/cart/${find.id_product}`, { quantity: 1 })
          .then((data) => {
            if (data.result === 1) {
              find.quantity += 1;
            }
          });
      } else {
        const prod = Object.assign({ quantity: 1 }, product);
        this.$parent.postJson('/api/cart', prod)
          .then((data) => {
            if (data.result === 1) {
              this.cartItems.push(prod);
            }
          });
      }
    },
  },
  mounted() {
    this.$store.dispatch('getProducts', 'http://localhost:5000/api/products');
    this.$store.dispatch('getCart', 'http://localhost:5000/api/cart');
  },

};
</script>

<style lang="scss">
</style>
