<template>
  <div id="detail">
    <DetailNavBar class="detail-nav"></DetailNavBar>
    <Scroll class="content" :probe-type="3" ref="scroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailGoodsInfo :detail-info="detailInfo"></DetailGoodsInfo>
      <detail-param-info :param-info="paramInfo"></detail-param-info>
    </Scroll>
  </div>
</template>

<script>
  import DetailNavBar from "views/detail/childComps/DetailNavBar";
  import DetailSwiper from "views/detail/childComps/DetailSwiper";
  import DetailBaseInfo from "views/detail/childComps/DetailBaseInfo";
  import DetailShopInfo from "views/detail/childComps/DetailShopInfo";
  import DetailGoodsInfo from "views/detail/childComps/DetailGoodsInfo";
  import DetailParamInfo from "views/detail/childComps/DetailParamInfo";

  import Scroll from "components/common/scroll/Scroll";

  import {getDetail, Goods, Shop, GoodsParams} from "network/detail";

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,

      Scroll
    },
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
      }
    },
    created() {
      this.iid = this.$route.params.iid

      getDetail(this.iid).then(res => {
        const data = res.result

        this.topImages = data.itemInfo.topImages

        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        this.shop = new Shop(data.shopInfo)

        this.detailInfo = data.detailInfo

        this.paramInfo = new GoodsParams(data.itemParams.info, data.itemParams.rule)
      })
    },
    methods: {
      imageLoad() {
        this.$refs.scroll.refresh()
      }
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .detail-nav{
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .content {
    height: calc(100% - 44px);
    background-color: #fff;
  }
</style>
