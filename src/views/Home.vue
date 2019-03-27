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
    this.getNewMusic();
    this.getRecommendMusic();
    // this.test()
  },
  methods: {
    fetchData() {
      axios
        .get("/qq/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg")
        .then(res => {
          return (this.recommendData = res.data.data);
        });
    },
    test() {
      axios
        .get("/kugou/yy/index.php?r=play/getdata&_=1497972864535&hash=")
        .then(() => {});
    },
    // 最新音乐
    getNewMusic() {
      axios.get("/qq/v8/fcg-bin/fcg_v8_toplist_cp.fcg", {
        params: {
          uin: "0",
          notice: "0",
          platform: "h5",
          needNewCode: "1",
          tpl: "3",
          page: "detail",
          type: "top",
          topid: "27"
        }
      });
    },
    // 推荐音乐
    getRecommendMusic() {
      // 巅峰榜
      const topicIdArr = {
        3: "欧美",
        5: "内地",
        6: "港台",
        19: "摇滚",
        26: "热歌",
        27: "最新",
        28: "网络",
        29: "影视",
        30: "梦的声音",
        31: "微信分享榜",
        32: "音乐人",
        105: "iTune",
        107: "UK",
        108: "Billboard"
      };
      axios.get("/qq/v8/fcg-bin/fcg_v8_toplist_cp.fcg", {
        params: {
          notice: "0",
          platform: "h5",
          tpl: "3",
          page: "detail",
          type: "top",
          topid: "36"
        }
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


