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
  mounted() {
    this.$store.dispatch('getProducts');
    this.$store.dispatch('getCart');
  },
};
</script>

<style lang="scss">
</style>
