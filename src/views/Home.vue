<template>
  <div class="home page">
    <!-- 搜索框 -->
    <div class="searchHead">
      <a-icon type="search" class="searchIcon"></a-icon>
      <form action="javascript:return true">
        <input
          type="search()"
          @compositionend="search"
          @keyup="search"
          class="searchInput"
          ref="seachInput"
          @focus="changeSearchState(1)"
        >
      </form>
      <a-icon type="close" v-if="showCancelBtn" class="cancelBtn" @click="clearResult()"></a-icon>
    </div>
    <div class="home-content">
      <!-- 搜索结果 -->
      <div
        class="searchResult"
        v-show="showCancelBtn"
        ref="searchResult"
        @touchstart="hideKeyboard()"
      >
        <div class="searchEnter" v-if="getSearchWord().length">搜索"{{getSearchWord()}}"</div>
        <div class="resBlock songRes" v-for="(group ,j) in searchDatas" :key="j">
          <div v-if="group.itemlist.length" class="title">{{group.name}}</div>
          <div class="resultItem" v-for="(item ,i) in group.itemlist" :key="i">
            <a-icon type="search" class="searchIcon"></a-icon>
            <span v-if="group.name === '专辑'">《</span>
            {{item.name}}
            <span v-if="group.name === '单曲'">- {{item.singer}}</span>
            <span v-if="group.name === '专辑'">》</span>
          </div>
        </div>
      </div>
      <!-- Banner -->
      <Banner :sliderData="recommendData.slider"/>
      <!-- 分类 -->
      <div class="classification">
        <div class="classItem" v-for="(item, i) in classificationData" :key="i">
          <a-icon class="icon" :type="item.icon"/>
          <div class="name">{{item.name}}</div>
        </div>
      </div>
      <!-- 推荐歌单 -->
      <div class="playList">
        <div class="upperTitle">推荐歌单</div>
        <div class="list-col">
          <div v-for="(item, i) in playList" :key="i" class="playListItem" @click="$router.push('/songListDetail');">
            <img :src="item.cover" alt>
            <span class="title">{{item.title}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import axios from "axios";
import Vue from "vue";

import {
  getRecommendData,
  getTopMusic,
  getSearchData,
  smartBox,
  getPlayList,
  getNewAlbum
} from "@/apis/qqPortal";

import { Icon } from "ant-design-vue";
Vue.use(Icon);

export default {
  name: "home",
  components: {
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
      ],
      showCancelBtn: false,
      searchDatas: {},
      searchFlag: 0,
      playList: {},
    };
  },
  created: function() {
    this.fetchData();
  },
  methods: {
    // 获取首页推荐数据
    fetchData() {
      getRecommendData().then(res => {
        this.recommendData = res.data.data;
      });
      getPlayList(1, 3).then(res => {
        this.playList = res.data.recomPlaylist.data.v_hot.slice(0, 3);
      });
      getNewAlbum();
    },
    // 搜索框状态
    changeSearchState(t) {
      t ? (this.showCancelBtn = true) : (this.showCancelBtn = false);
    },
    // 清空搜索结果
    clearResult() {
      this.changeSearchState(0);
      this.$refs.seachInput.value = "";
      this.searchDatas = {};
    },
    // 隐藏键盘
    hideKeyboard() {
      this.$refs.seachInput.blur();
    },
    getSearchWord() {
      const val = this.$refs.seachInput && this.$refs.seachInput.value;
      return val || "";
    },
    // 执行搜索
    search() {
      const value = this.getSearchWord();
      if (!value.length) {
        this.searchDatas = {}
        return;
      }
      this.searchFlag++;
      if (this.searchFlag === 2) return;
      value.replace(/\s+/g, "") !== "" &&
        smartBox(value).then(res => {
          this.searchFlag = 0;
          const { song, singer, album } = res.data.data;
          this.searchDatas = { song, singer, album };
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
  .home-content {
    height: 100%;
    .searchResult {
      height: 100%;
      padding: 0.5rem;
      .searchEnter {
        color: #628bd8;
        font-size: 1rem;
        margin: .5rem 0;
      }
      .resBlock {
        margin-bottom: 1rem;
        .title {
          // border-bottom: 1px solid #9b9b9b;
          line-height: 2rem;
          font-size: 1rem;
        }
        .resultItem {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          border-bottom: 1px solid #e0dddd;
          line-height: 2.5rem;
          // margin-left: 0.5rem;
          .searchIcon {
            color: #757575;
            margin-right: .3rem;
          }
        }
      }
    }
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
    .playList {
      margin: 5% 0;
      .upperTitle {
        // align-self: flex-start;
        font-size: 1.2rem;
        font-weight: bold;
        margin: 5% 0;
      }
      .list-col {
        display: flex;
        justify-content: space-between;
        .playListItem {
          width: 6.5rem;
          img {
            height: 6.5rem;
            overflow: hidden;
            border-radius: 5px;
            width: 100%;
          }
          .title {
            margin-top: 0.5rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            word-break: break-all;
          }
        }
      }
    }
  }
}
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
    color: #5b79ce;
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


