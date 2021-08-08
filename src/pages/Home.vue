<template>
  <div class="home">
    <header-block/>
    <navigation/>
    <promo/>
    <product-block/>
<!--      <router-link to="/index"/>-->
<!--      <router-link to="/single-page"/>-->
<!--      <router-link to="user-cart"/>-->
<!--      <router-link to="checkout"/>-->
<!--      <router-view/>-->
    <subscribe/>
      <footer-block/>
  </div>
</template>

<script>

import HeaderBlock from '@/blocks/Header-block.vue';
import Navigation from '@/blocks/Navigation.vue';
import Subscribe from '@/blocks/Subscribe.vue';
import FooterBlock from '@/blocks/Footer-block.vue';
import Promo from '@/blocks/Promo.vue';
import ProductBlock from '@/blocks/Product-block.vue';

export default {
  name: 'Home',
  components: {
    ProductBlock,
    HeaderBlock,
    Navigation,
    Promo,
    Subscribe,
    FooterBlock,
  },
};
</script>
