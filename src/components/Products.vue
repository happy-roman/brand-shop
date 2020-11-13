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
    };
  },
  inject: ['getJson'],
  methods: {
    filter(value) {
      const regexp = new RegExp(value, 'i');
      this.filtered = this.products.filter(el => regexp.test(el.product_name));
    },
  },
  beforeMount() {
    this.getJson('/api/products')
      .then((data) => {
        data.forEach((el) => {
          this.products.push(el);
          this.filtered.push(el);
        });
        console.log(this.products || 123);
      });
  },
  mounted() {
    console.log(this.filtered.product_name);
  },
};
</script>

<style scoped>

</style>
