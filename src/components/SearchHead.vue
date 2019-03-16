<template>
  <div class="searchHead">
    <v-icon type="search" class="searchIcon"></v-icon>
    <input type="text" class="searchInput" @click="switchPage('/search')" v-focus="PAGE">
  </div>
</template>

<script>
import Vue from "vue";
import vueBeauty from "vue-beauty";
import "vue-beauty/package/style/vue-beauty.min.css";
Vue.use(vueBeauty);

export default {
  name: "searchHead",
  data() {
    return {
      PAGE: window.location.pathname
    };
  },
  methods: {
    switchPage(page) {
      this.$router.push(page);
    }
  },
  directives: {
    focus: {
      // 在search页的时候 自动聚焦input
      inserted: function(el, { value }) {
        value === "/search" && el.focus();
      }
    }
  }
};
</script>

<style lang="less" scoped>
.searchHead {
  width: 100%;
  height: 2.5rem;
  background: #f1f1f1;
  border-radius: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .searchIcon {
    font-size: 18px;
    margin-left: 1rem;
    font-weight: bold;
  }
  .searchInput {
    width: 100%;
    height: 100%;
    font-size: 18px;
    padding: 10px;
    outline: 0;
    border: 0;
    background: transparent;
  }
}
</style>


