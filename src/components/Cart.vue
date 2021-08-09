<template>
    <div class="cart-block" >
        <a href="#"><img class="cart" src="img/cart.svg" alt="cart"></a>
        <div class="cart-open">
            <div v-if="!cartItems.length" >
                <p class="cart-open__empty">Your cart is empty</p>
            </div>
            <div v-else>
                <div class="cart-block" >
                    <div class="cart-product">
                        <cartItems class="cart-item"
                                   v-for="item of cartItems"
                                   :key="item.id_product"
                                   :cart-item="item"
                                   :img="imgCart"
                                   @remove="remove">
                        </cartItems>
                        <div>
                            <p>total</p>
                            <p>$ {{totalPrice}}</p>
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
  name: 'Cart',
  components: {
    cartItems,
  },
  data() {
    return {
      imgCart: 'https://placehold.it/72x85',
      cartItems: [],
      showCart: false,
      totalPrice: 0,
      url: 'api/cart',
    };
  },
  inject: [
    'getJson',
    'putJson',
    'deleteJson',
  ],
  methods: {
    addProduct(product) {
      const find = this.cartItems.find(el => el.id_product === product.id_product);
      if (find) {
        this.$parent.putJson(`/api/cart/${find.id_product}`, { quantity: 1 })
          .then((data) => {
            if (data.result === 1) {
              find.quantity += 1;
            }
          });
      } else {
        const prod = Object.assign({ quantity: 1 }, product);
        this.$parent.postJson('/api/cart', prod)
          .then((data) => {
            if (data.result === 1) {
              this.cartItems.push(prod);
            }
          });
      }
    },
    remove(item) {
      if (item.quantity > 1) {
        this.$parent.putJson(`/api/cart/${item.id_product}`, { quantity: -1 })
          .then((data) => {
            if (data.result === 1) {
              this.item.quantity -= 1;
            }
          });
      } else {
        this.$parent.deleteJson(`/api/cart/${item.id_product}`)
          .then((data) => {
            if (data.result === 1) {
              this.cartItems.splice(this.cartItems.indexOf(item), 1);
            }
          });
      }
    },
    total() {
      let total = this.totalPrice;
      this.cartItems.forEach((el) => {
        total += (+el.price * el.quantity);
      });
      this.totalPrice = total.toFixed(2);
    },
  },
  mounted() {
    this.getJson(this.url)
      .then((data) => {
        data.content.forEach((el) => {
          this.cartItems.push(el);
        });
      });
  },
  beforeUpdate() {
    this.total();
  },
};
</script>


<style scoped>

</style>
