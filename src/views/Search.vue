<template>
  <div class="search page">
    <SearchHead @searchRes="getSearchWord"/>
  </div>
</template>

<script>
import SearchHead from "@/components/SearchHead.vue";

import axios from "axios";

export default {
  name: "search",
  data() {
    return {
      searchDatas: []
    };
  },
  components: {
    SearchHead
  },
  methods: {
    // 获取搜索结果
    getSearchResult(word, page = 1, pagesize = 20) {
      axios
        .get("/qq/soso/fcgi-bin/client_search_cp", {
          params: {
            aggr: 1,
            cr: 1,
            flag_qc: 0,
            w: word,
            p: page,
            n: pagesize
          }
        })
        .then(res => {
          this.searchDatas = this.stringtoJSON(res.data).data.song;
          console.log(this.searchDatas);
        });
    },
    getSearchWord(msg) {
      this.getSearchResult(msg);
    },
    stringtoJSON(data) {
      if (typeof data === "string") {
        return JSON.parse(data.replace(/^callback\(/g, "").replace(/\)$/g, ""));
      }
      return data;
    }
  }
};
</script>

<style lang="less">
</style>


