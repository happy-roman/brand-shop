<template>
  <div>
    <div>
      <section class="single-page-slider">
        <div class="slider-nav"><i class="fas fa-chevron-left"></i></div>
        <img :src="product.img" alt="img">
        <div class="slider-nav"><i class="fas fa-chevron-right"></i></div>
      </section>
      <section class="description-product container">
        <div class="decripsion">
          <p class="pink">WOMEN COLLECTION</p>
          <p>{{ product.product_name }}</p>
          <p>Compellingly actualize fully researched processes before proactive outsourcing.
            Progressively syndicate collaborative architectures before cutting-edge services.
            Completely visualize parallel core competencies rather than exceptional&nbsp;portals.
          </p>
          <div class="specifications">
            <div>
              <p>MATERIAL: <span>COTTON</span></p>
            </div>
            <div>
              <p>DESIGNER: <span>BINBURHAN</span></p>
            </div>
          </div>
          <p class="pink price-product price">$ {{ product.price }}</p>
          <div class="select-product">
            <div>
              <p>CHOOSE COLOR</p>
              <select id="color" class="selector-product">
                <option label="red"></option>
                <option label="black"></option>
                <option label="blue"></option>
                <option label="pink"></option>
                <option label="green"></option>
                <option label="navy"></option>
              </select>
            </div>
            <div>
              <p>CHooSE SIZE</p>
              <select id="size" class="selector-product">
                <option>xxl</option>
                <option>xl</option>
                <option>l</option>
                <option>m</option>
                <option>s</option>
                <option>xs</option>
              </select>
            </div>
            <div>
              <p>QUANTITY</p>
              <select id="quantity" class="selector-product" name="quantity" v-model="quantity">
                <option v-for="i of 10" :key=i>{{ i }}</option>
              </select>
            </div>
          </div>
          <button name="add-to-cart" class="pink" @click="add">
            <img src="/img/pink-cart.svg" alt="img"> Add to cart
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'product-page',
  data() {
    return {
      product: {},
      quantity: '',
    };
  },
  methods: {
    ...mapActions(['addToCart']),
    add() {
      if (this.quantity) {
        this.product.quantity = parseInt(this.quantity, 10);
        this.addToCart(this.product);
      } else {
        console.log('enter quanity');
      }
    },
  },
  computed: {
  },
  mounted() {
    const find = this.$store.state.products.find(
      el => el.id_product === parseInt(this.$route.params.id, 10),
    );
    if (find) {
      this.product = find;
    } else {
      fetch(`http://localhost:5000/api/products/${this.$route.params.id}`)
        .then(res => res.json())
        .then((data) => { this.product = data; })
        .catch(err => console.log(err || 'Поймали ошибку'));
    }
  },
  watch: {
    $route() {
      // eslint-disable-next-line no-restricted-globals
      if (isNaN(this.$route.params.id) || typeof this.$route.params.id === 'string') this.$router.push('/');
    },
  },
};

</script>

<style scoped>

</style>
