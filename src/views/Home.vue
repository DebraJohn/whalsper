<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <SearchHead />
    <Banner />
    <div class="hotList"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchHead from '@/components/SearchHead.vue'
import Banner from '@/components/Banner.vue'

export default {
  name: 'home',
  components: {
    SearchHead,
    Banner
  }
}
</script>

<style lang="less">
.home {
  width: 100%;
  height: 100%;
  padding: 5%;
}

</style>


