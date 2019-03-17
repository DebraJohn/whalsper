<template>
  <div class="searchHead">
    <a-icon type="search" class="searchIcon"></a-icon>
    <form action="javascript:return true">
      <input
        type="search"
        @keyup.13="search()"
        class="searchInput"
        @click="switchPage('/search')"
        v-focus="PAGE"
        ref="seachInput"
      >
    </form>
    <a-icon type="close" v-if="showCancelBtn()" class="cancelBtn" @click="switchPage('/')"></a-icon>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from "ant-design-vue";
Vue.use(Icon);

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
    },
    showCancelBtn() {
      if (this.PAGE === "/search") {
        return true;
      }
    },
    search() {
      this.$refs.seachInput.blur();
      const value = this.$refs.seachInput.value;
      this.$emit('searchRes', value)
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
  & > form {
    width: 100%;
    height: 100%;
  }
  .searchIcon {
    font-size: 18px;
    margin-left: 1rem;
    font-weight: bold;
  }
  .searchInput {
    width: 100%;
    height: 100%;
    font-size: 14px;
    padding: 10px;
    outline: 0;
    border: 0;
    background: transparent;
  }
  .cancelBtn {
    font-size: 18px;
    // color: #6f6f6f;
    margin-right: 1rem;
  }
}
</style>


