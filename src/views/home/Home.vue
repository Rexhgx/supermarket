<template>
  <div id="home">
    <NavBar class="home-nav">
      <template v-slot:center>
        <div>购物车</div>
      </template>
    </NavBar>

    <Swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image923" alt="">
        </a>
      </swiper-item>
    </Swiper>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import {getHomeMultidata} from "network/home";
  import Swiper from "../../components/common/swiper/Swiper";
  import SwiperItem from "../../components/common/swiper/SwiperItem";

  export default {
    name: "Home",
    components: {
      Swiper,
      SwiperItem,
      NavBar,
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
