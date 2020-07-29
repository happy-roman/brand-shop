<template>
    <li class="product-list">
        <div class="product-pic-price">
            <div class="mask">
                <button class="shake-top buy-btn" @click="cartAPI.addProduct(product)">
                    <img src="img/Form_1_copy.svg" alt="cart">
                     Add to Cart
                </button>
            </div>
            <a href="single-page.html"><img :src="img" alt="prodImg" class="product-img"></a>
            <div class="product-price">
                <p class="product-name">{{product.product_name}}</p>
                <p class="pink price">$<span>{{product.price}}</span></p>
            </div>
        </div>
    </li>
</template>

<script>
export default {
  name: 'Product',
  props: ['product', 'img'],
  data() {
    return {
      cartAPI: this.$root.$refs.cart,
    };
  },
};
</script>

<style scoped>

</style>
