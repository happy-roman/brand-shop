<template>
  <ul class="products product-pic">
    <product
      v-for="item of this.$store.state.products"
      :key="item.id_product"
      :product="item">
    </product>
  </ul>
</template>

<script>

import product from '@/components/Product.vue';

export default {
  name: 'Products',
  components: {
    product,
  },
  data() {
    return {
      imgCatalog: 'https://placehold.it/260x280',
    };
  },
};
</script>

<style scoped>

</style>
