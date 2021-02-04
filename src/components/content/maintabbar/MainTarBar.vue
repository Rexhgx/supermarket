<template>
  <TabBar>
    <TabBarItem path="/home" >
      <!--dom 中使用路径需要用 ~ 来识别配置的别名-->
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/home.svg" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/home_active.svg" alt="">
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/category">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/category.svg" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/category_active.svg" alt="">
      </template>
      <template v-slot:item-text>
        <div>品类</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/cart">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/shopcart.svg" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/shopcart_active.svg" alt="">
      </template>
      <template v-slot:item-text>
        <div>购物车</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/me">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/profile.svg" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/profile_active.svg" alt="">
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </TabBarItem>
  </TabBar>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar";
  import TabBarItem from "components/common/tabbar/TabBarItem";

  export default {
    name: "MainTarBar",
    components: {
      TabBar,
      TabBarItem,
    }
  }
</script>

<style scoped>

</style>
