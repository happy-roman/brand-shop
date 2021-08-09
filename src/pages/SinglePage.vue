<template>
  <div>
    <header-block/>
    <navigation/>
    <div>
      <section class="single-page-slider">
        <div class="slider-nav"><i class="fas fa-chevron-left"></i></div>
        <img :src="img" alt="img">
        <div class="slider-nav"><i class="fas fa-chevron-right"></i></div>
      </section>
      <section class="description-product container">
        <div class="decripsion">
          <p class="pink">WOMEN COLLECTION</p>
          <p>Moschino Cheap And Chic</p>
          <p>Compellingly actualize fully researched processes before proactive outsourcing.
            Progressively syndicate collaborative architectures before cutting-edge services.
            Completely visualize parallel core competencies rather than exceptional&nbsp;portals.
          </p>
          <div class="specifications">
            <div>
              <p>MATERIAL: <span>COTTON</span></p>
            </div>
            <div>
              <p>DESIGNER: <span>BINBURHAN</span></p>
            </div>
          </div>
          <p class="pink price-product price">$ {{ price }}</p>
          <div class="select-product">
            <div>
              <p>CHOOSE COLOR</p>
              <select id="color" class="selector-product">
                <option label="red"></option>
                <option label="black"></option>
                <option label="blue"></option>
                <option label="pink"></option>
                <option label="green"></option>
                <option label="navy"></option>
              </select>
            </div>
            <div>
              <p>CHooSE SIZE</p>
              <select id="size" class="selector-product">
                <option>xxl</option>
                <option>xl</option>
                <option>l</option>
                <option>m</option>
                <option>s</option>
                <option>xs</option>
              </select>
            </div>
            <div>
              <p>QUANTITY</p>
              <select id="quantity" class="selector-product">
                <option v-for="i of 10" :key=i>{{ i }}</option>
              </select>
            </div>
          </div>
          <button name="add-to-cart" class="pink" @click="addProduct(product)">
            <img src="img/pink-cart.svg" alt="img"> Add to cart
          </button>
        </div>
      </section>
    </div>
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
  name: 'single-page',
  components: {
    HeaderBlock,
    Navigation,
    Subscribe,
    FooterBlock,
  },
  data() {
    return {
      img: undefined,
      name: undefined,
      price: undefined,
    };
  },
  inject: [
    'putJson',
    'postJson',
  ],
  method: {
    getGood() {

    },
    addProduct(product) {
      const find = this.cartItems.find(el => el.id_product === product.id_product);
      if (find) {
        this.putJson(`/api/cart/${find.id_product}`, { quantity: 1 })
          .then((data) => {
            if (data.result === 1) {
              find.quantity += 1;
            }
          });
      } else {
        const prod = Object.assign({ quantity: 1 }, product);
        this.postJson('/api/cart', prod)
          .then((data) => {
            if (data.result === 1) {
              this.cartItems.push(prod);
            }
          });
      }
    },
  },
};

</script>

<style scoped>

</style>
