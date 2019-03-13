<template>
  <div class="banner">
    <div class="wrapper">
      <div
        class="slider"
        v-for="(item, index) in sliderData"
        :key="index"
        :class="index === 0 ? 'current' : index === sliderData.length - 1 ? 'left' : ''"
      >
        <img :src="item.picUrl" alt="banner">
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import vueBeauty from "vue-beauty";
import "vue-beauty/package/style/vue-beauty.min.css";
Vue.use(vueBeauty);

import DATA from "@/assets/mock";

export default {
  name: "banner",
  data() {
    return {
      sliderData: DATA.data.slider
    };
  },
  methods: {
    showData() {
      console.log(DATA);
    },
    setSliderPosition() {}
  },
  created: function() {
    this.showData();
  }
};
</script>

<style lang="less" scoped>
.banner {
  width: 100%;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  margin: 10% 0;
  .wrapper {
    width: 100%;
    position: relative;
    .slider {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 0.5rem;
      overflow: hidden;
      transform: scale(0.8) translate(115%, 0);
      &.current {
        z-index: 1;
        transform: scale(1) translate(0);
      }
      &.left {
        transform: scale(0.8) translate(-115%, 0);
      }
      & > img {
        width: 100%;
      }
    }
  }
}
</style>


