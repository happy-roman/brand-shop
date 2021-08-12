<template>
  <div class="home">
    <promo/>
    <product-block/>
  </div>
</template>

<script>

import Promo from '@/blocks/Promo.vue';
import ProductBlock from '@/blocks/Product-block.vue';

export default {
  name: 'Home',
  components: {
    ProductBlock,
    Promo,
  },
};
</script>
