<template>
  <div id="cart">
    <NavBar class="nav-bar">
      <template v-slot:center>
        <div>购物车({{cartLength}})</div>
      </template>
    </NavBar>

    <cart-list></cart-list>

    <CartBottomBar></CartBottomBar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import CartList from "./childComps/CartList";
  import CartBottomBar from "./childComps/CartBottomBar";

  import {mapGetters} from 'vuex'

  export default {
    name: "Cart",
    data() {
      return {

      }
    },
    components: {
      NavBar,
      CartList,
      CartBottomBar
    },
    computed: {
      ...mapGetters(['cartLength'])
    }
  }
</script>

<style scoped>
  /*#cart {*/
  /*  !*position: relative;*!*/
  /*  height: 100vh;*/
  /*}*/

  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }
</style>
