<template>
    <div>
        <promo/>
        <category/>
        <product-block/>
    </div>
</template>

<script>
import Promo from '@/blocks/Promo.vue';
import Category from '@/blocks/Category.vue';
import ProductBlock from '@/blocks/Product-block.vue';

export default {
  name: 'Index',
  components: {
    Promo,
    Category,
    ProductBlock,
  },
};
</script>

<style scoped>

</style>
