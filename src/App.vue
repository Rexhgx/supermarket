<template>
  <div id="App">
    <router-view></router-view>
    <MainTarBar></MainTarBar>
  </div>
</template>

<script>
  import MainTarBar from "components/content/maintabbar/MainTarBar";

  export default {
    name: 'App',
    components: {
      MainTarBar,
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
