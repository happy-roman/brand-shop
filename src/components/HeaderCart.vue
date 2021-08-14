<template>
  <div class="cart-block">
    <a href="#"><img class="cart" src="/img/cart.svg" alt="cart"></a>
    <div class="cart-open">
      <div v-if="this.$store.state.userCart.length === 0">
        <p class="cart-open__empty">Your cart is empty</p>
      </div>
      <div v-else>
        <div class="cart-block">
          <div class="cart-product">
            <cartItems class="cart-item"
                       v-for="item of this.$store.state.userCart"
                       :key="item.id_product"
                       :cart-item="item"
                       :img="imgCart">
            </cartItems>
            <div>
              <p>total</p>
              <p>$ {{ total }}</p>
            </div>
          </div>
        </div>
        <div class="cart-btn">
          <a href="checkout.html">Checkout</a>
          <a href="shopping-cart.html">Go to cart</a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

import cartItems from '@/components/cartItem.vue';

export default {
  name: 'header-cart',
  components: {
    cartItems,
  },
  data() {
    return {
      imgCart: 'https://placehold.it/72x85',
      cartItems: [],
      showCart: false,
    };
  },

  computed: {
    total() {
      let total = 0;
      this.$store.state.userCart.forEach((el) => {
        total += (+el.price * el.quantity);
      });
      return total.toFixed(2);
    },
  },
};
</script>


<style scoped>

</style>
