<template>
  <div class="home page">
    <SearchHead/>
    <Banner :sliderData="recommendData.slider"/>
    <div class="classification">
      <div class="classItem" v-for="(item, i) in classificationData" :key="i">
        <a-icon class="icon" :type="item.icon"/>
        <div class="name">{{item.name}}</div>
      </div>
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
      recommendData: {},
      classificationData: [
        { icon: "fire", name: "推荐" },
        { icon: "line-chart", name: "排行" },
        { icon: "rocket", name: "最新" },
        { icon: "customer-service", name: "电台" }
      ]
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
  .classification {
    display: flex;
    justify-content: space-around;
    .classItem {
      .name {
        text-align: center;
        margin-top: 0.3rem;
      }
      .icon {
        font-size: 35px;
        color: #628bd8;
      }
    }
  }
}
</style>


