<template>
  <div class="banner">
    <div class="wrapper">
      <div
        class="slider"
        v-for="(item, index) in sliderData"
        :key="index"
        :class="index === 0 ? 'current' : index === sliderData.length - 1 ? 'left' : ''"
        @touchstart="getStartPos"
        @touchmove="calcPos"
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

import $ from "jquery";
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
    getStartPos(e) {
      this.startPos = e.targetTouches[0].clientX;
      // console.log(this.startPos);
    },
    calcPos(e) {
      const target = e.currentTarget;
      target.clientX = this.diff;
      this.endPos = e.targetTouches[0].clientX;
      this.diff = +(this.endPos - this.startPos);
      target.style.left = `${this.diff}px`;
      target.ontouchend = () => {
        this.switchBanner(target);
      };
    },
    switchBanner(target) {
      const $sliderEls = $(".banner .wrapper");
      const $sliderItem = $sliderEls.find(".slider");
      $sliderItem.removeClass("current");
      const $target = $(target);
      let $oriEl;
      if (this.diff > 0) {
        $oriEl = $target.prev().length
          ? $target.prev()
          : $sliderEls.find(".slider:last");
        $oriEl
          .removeClass("left")
          .addClass("current")
          .css("z-index", 3)
          .siblings()
          .css("z-index", 0);
      } else {
        $sliderEls.find(".left").removeClass("left");
        $oriEl = $target.next().length
          ? $target.next()
          : $sliderEls.find(".slider:first");
        $oriEl
          .addClass("current")
          .css("z-index", 3)
          .siblings()
          .css("z-index", 0);
      }

      const $curLeft = $oriEl.prev().length
        ? $oriEl.prev()
        : $sliderEls.find(".slider:last");
      $curLeft.addClass("left").css("z-index", "1");
      const $curRight = $oriEl.next().length
        ? $oriEl.next()
        : $sliderEls.find(".slider:first");
      $curRight.css("z-index", "1");
      $sliderItem.css("left", 0);
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


