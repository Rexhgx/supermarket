<template>
  <div id="home">
    <NavBar class="home-nav">
      <template v-slot:center>
        <div>购物车</div>
      </template>
    </NavBar>

    <home-swiper :cbanners="banners"></home-swiper>

    <HomeRecommendView :recommends="recommends"></HomeRecommendView>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "views/home/childComps/HomeSwiper";
  import HomeRecommendView from "views/home/childComps/HomeRecommendView";

  import {getHomeMultidata} from "network/home";

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommendView,
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    }
  }
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: white;
  }
</style>
