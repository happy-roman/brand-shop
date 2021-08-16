<template>
  <div class="home">
    <promo/>
    <category/>
    <product-block/>
  </div>
</template>

<script>

import Promo from '@/blocks/Promo.vue';
import ProductBlock from '@/blocks/Product-block.vue';
import Category from '@/blocks/Category.vue';

export default {
  name: 'Home',
  components: {
    Category,
    ProductBlock,
    Promo,
  },
};
</script>
