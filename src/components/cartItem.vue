<template>
    <div>
        <a href="#"><img :src="img" alt="img"></a>
        <div>
            <a href="#">{{cartItem.product_name}}</a>
            <p><i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </p>
            <p class="pink">{{cartItem.quantity}}  x   $ {{cartItem.price}}</p>
        </div>
        <button class="cart-cancel" @click="$emit('remove', cartItem)">
            <i class="fas fa-times-circle"></i>
        </button>
    </div>
</template>

<script>
export default {
  name: 'cartItems',
  props: ['cartItem', 'img'],
  updated() {
    this.$parent.total();
  },
};
</script>

<style scoped>

</style>
