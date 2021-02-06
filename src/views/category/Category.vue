<template>
  <div class="wrapper">
    <ul>
      <li>0#</li>
      <li>0#</li>
      <li>0#</li>
      <li>0#</li>
      <li>0#</li>
      <li>0#</li>
      <li>0#</li>
      <li>0#</li>
      <li>0#</li>
      <li>0#</li>
    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Category",
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BScroll(document.querySelector('.wrapper'), {
        probeType: 3,
        pullUpLoad: true
      })

      this.scroll.on('scroll', (position) => {

      })

      this.scroll.on('pullingUp', () => {

      })
    }
  }
</script>

<style scoped>

</style>
