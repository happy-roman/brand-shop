<template>
  <header class="header-block">
    <div class="container header-block__flex">
      <div class="header-block__left">
        <a href="index.html" class="logo">
          <img class="logo__img" src="img/logo.png" alt="logo">
          <p>BRAN<span class="pink">D</span></p>
        </a>
        <details>
          <summary>Browse</summary>
          <div class="browse-menu">
            <div>
              <p>women</p>
              <hr>
              <ul>
                <li><a href="#">Dresses</a></li>
                <li><a href="#">Tops</a></li>
                <li><a href="#">Sweaters/Knits</a></li>
                <li><a href="#">Jackets/Coats</a></li>
                <li><a href="#">Blazers</a></li>
                <li><a href="#">Denim</a></li>
                <li><a href="#">Leggings/Pants</a></li>
                <li><a href="#">Skirts/Shorts</a></li>
                <li><a href="#">Accessories </a></li>
              </ul>
            </div>
            <div>
              <p>men</p>
              <hr>
              <ul>
                <li><a href="#">Tees/Tank tops</a></li>
                <li><a href="#">Shirts/Polos</a></li>
                <li><a href="#">Sweaters</a></li>
                <li><a href="#">Sweatshirts/Hoodies</a></li>
                <li><a href="#">Blazers</a></li>
                <li><a href="#">Jackets/vests</a></li>
              </ul>
            </div>
          </div>
        </details>
        <form class="form" action="#">
          <!--suppress HtmlFormInputWithoutLabel -->
          <input type="text" placeholder="Search for Item...">
          <button><i class="fas fa-search"></i></button>
        </form>
      </div>
      <div class="header-block__right">
<!--        <Cart/>-->
        <button>My Account <i class="fas fa-sort-down"></i></button>
      </div>
    </div>
  </header>
</template>

<script>

// import Cart from '@/components/Cart.vue';

export default {
  name: 'HeaderBlock',
  components: {
    // Cart,
  },
};
</script>
