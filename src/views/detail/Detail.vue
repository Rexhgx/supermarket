<template>
  <div>{{iid}}</div>
</template>

<script>
  export default {
    name: "Detail",
    data() {
      return {

      }
    },
    created() {
      this.iid = this.$route.params.iid
    }
  }
</script>

<style scoped>

</style>
