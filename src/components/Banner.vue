<template>
  <div class="banner">
    <div class="wrapper" @touchstart="getStartPos" @touchmove="calcPos">
      <div class="slider left">
        <img :src="sliderData[prevIndex()].picUrl" alt="banner">
      </div>
      <div class="slider current" :style="{left:leftPos + 'px'}">
        <img :src="sliderData[curIndex].picUrl" alt="banner">
      </div>
      <div class="slider">
        <img :src="sliderData[nextIndex()].picUrl" alt="banner">
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import vueBeauty from "vue-beauty";
import "vue-beauty/package/style/vue-beauty.min.css";
Vue.use(vueBeauty);

import $ from "jquery";
import DATA from "@/assets/mock";

export default {
  name: "banner",
  data() {
    return {
      sliderData: DATA.data.slider,
      curIndex: 0,
      leftPos: 0
    };
  },
  methods: {
    showData() {
      console.log(DATA);
    },
    getStartPos(e) {
      this.startPos = e.targetTouches[0].clientX;
    },
    calcPos(e) {
      const target = e.currentTarget;
      target.clientX = this.diff;
      this.endPos = e.targetTouches[0].clientX;
      this.diff = +(this.endPos - this.startPos);
      this.leftPos = this.diff;
      target.ontouchend = () => {
        if (this.diff > 0) {
          this.curIndex = this.prevIndex();
        } else {
          this.curIndex = this.nextIndex();
        }
        setTimeout(() => {
          this.leftPos = 0;
        }, 300);
      };
    },
    switchPic() {},

    prevIndex() {
      return this.curIndex - 1 > 0
        ? this.curIndex - 1
        : this.sliderData.length - 1;
    },
    nextIndex() {
      return this.curIndex + 1 < this.sliderData.length ? this.curIndex + 1 : 0;
    }
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
      transition: 0.3s linear;
      &.current {
        z-index: 3;
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


