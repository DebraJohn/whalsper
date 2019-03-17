<template>
  <div class="home page">
    <SearchHead/>
    <Banner :sliderData="recommendData.slider"/>
    <div class="classification">
        <a-icon type="fire" />
    </div>
    <div class="hotList"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchHead from "@/components/SearchHead.vue";
import Banner from "@/components/Banner.vue";
import axios from "axios";
import Vue from "vue";

import { Icon } from "ant-design-vue";
Vue.use(Icon);

export default {
  name: "home",
  components: {
    SearchHead,
    Banner
  },
  data() {
    return {
      recommendData: {}
    };
  },
  created: function() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get("/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg")
        .then(res => {
          return (this.recommendData = res.data.data);
        });
    }
  }
};
</script>

<style lang="less">
.page {
  width: 100%;
  height: 100%;
  padding: 5%;
}
</style>


