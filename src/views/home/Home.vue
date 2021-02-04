<template>
  <div id="home">
    <NavBar class="home-nav">
      <template v-slot:center>
        <div>购物车</div>
      </template>
    </NavBar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

  export default {
    name: "Home",
    components: {
      NavBar,
    }
  }
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: white;
  }
</style>
