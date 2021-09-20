<template>
  <ul class="products product-pic">
    <product
      v-for="item of this.products"
      :key="item.id_product"
      :product="item">
    </product>
  </ul>
</template>

<script>

import product from '@/components/blocks/Product.vue';
import { mapGetters } from 'vuex';

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
  computed: {
    ...mapGetters('products', ['products']),
  },
};
</script>

<style scoped>

</style>
