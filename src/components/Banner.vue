<template>
  <div class="banner">
    <div class="wrapper" @touchstart="getStartPos" @touchmove="calcPos" ref="wrapper">
      <div
        v-for="(item, i) in sliderData"
        :key="i"
        :style="{left:diff + 'px'}"
        class="slider"
        :class="i === curIndex ? 'current' : i === prevIndex() ? 'left' : i === nextIndex() ? 'right' : ''"
      >
        <img :src="item.picUrl" alt="banner" @load="getHeight">
      </div>
    </div>
  </div>
</template>

<script>
// import Vue from "vue";
// import axios from "axios";

export default {
  name: "banner",
  data() {
    return {
      curIndex: 0,
      diff: 0
    };
  },
  props: {
    sliderData: Array
  },
  methods: {
    getStartPos(e) {
      this.startPos = e.targetTouches[0].clientX;
    },
    calcPos(e) {
      e.preventDefault();
      const target = e.currentTarget;
      this.endPos = e.targetTouches[0].clientX;
      this.diff = +(this.endPos - this.startPos);
      target.ontouchend = () => {
        if (this.diff > 50) {
          this.curIndex = this.prevIndex();
        } else if (this.diff < -50) {
          this.curIndex = this.nextIndex();
        }
        this.diff = 0;
      };
    },
    prevIndex() {
      return this.curIndex - 1 >= 0
        ? this.curIndex - 1
        : this.sliderData.length - 1;
    },
    nextIndex() {
      return this.curIndex + 1 < this.sliderData.length ? this.curIndex + 1 : 0;
    },
    autoChange() {
      this.autoTimer = setInterval(() => {
        this.curIndex = this.nextIndex();
      }, 15000);
    },
    getHeight(e) {
      this.height = e.target.clientHeight;
      const originHeight = this.$refs.wrapper.style.height;
      !originHeight &&
        this.height &&
        (this.$refs.wrapper.style.height = this.height + "px");
    }
  },
  created: function() {
    this.autoChange();
  },
  watch: {
    sliderData: function(data) {
      this.sliderData = data;
    }
  }
};
</script>

<style lang="less" scoped>
.banner {
  width: 100%;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  margin: 5% 0;
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
      display: none;
      transition: 0.3s linear;
      &.current {
        z-index: 3;
        display: block;
      }
      &.left {
        transform: scale(0.8) translate(-115%, 0);
        display: block;
      }
      &.right {
        transform: scale(0.8) translate(115%, 0);
        display: block;
      }
      & > img {
        width: 100%;
      }
    }
  }
}
</style>


