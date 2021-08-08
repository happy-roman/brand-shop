<template>
  <ul class="products product-pic">
    <product
      ref="refref"
      v-for="item of filtered"
      :key="item.id_product"
      :img="imgCatalog"
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
      products: [],
      filtered: [],
      imgCatalog: 'https://placehold.it/260x280',
      apiUrl: 'api/products',
    };
  },
  inject: ['getJson'],
  methods: {
    filter(value) {
      const regexp = new RegExp(value, 'i');
      this.filtered = value.filter(el => regexp.test(el.product_name));
    },
  },
  created() {
    this.getJson(this.apiUrl)
      .then((data) => {
        data.forEach((el) => {
          this.products.push(el);
          this.filtered.push(el);
        });
      });
  },
  mounted() {
    this.filter(this.products);
  },
};
</script>

<style scoped>

</style>
