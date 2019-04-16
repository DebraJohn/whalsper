import axios from 'axios';
import { commonParams, recomPlaylist, newAlbum } from './qqParams';

const topicIdArr = {
  3: '欧美',
  5: '内地',
  6: '港台',
  19: '摇滚',
  26: '热歌',
  27: '最新',
  28: '网络',
  29: '影视',
  30: '梦的声音',
  31: '微信分享榜',
  32: '音乐人',
  36: 'K歌金曲',
  105: 'iTune',
  107: 'UK',
  108: 'Billboard'
};

// 获取首页推荐音乐
export function getRecommendData() {
  return axios.get('/qq/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg');
}

// 获取榜单音乐
export function getTopMusic(topid) {
  return axios.get('/qq/v8/fcg-bin/fcg_v8_toplist_cp.fcg', {
    params: {
      topid,
      uin: '0',
      notice: '0',
      platform: 'h5',
      needNewCode: '1',
      tpl: '3',
      page: 'detail',
      type: 'top'
    }
  });
}

// 音乐搜索
export function getSearchData(word, page = 1, pagesize = 20) {
  return axios.get('/qq/soso/fcgi-bin/client_search_cp', {
    params: {
      aggr: 1,
      cr: 1,
      flag_qc: 0,
      w: word,
      p: page,
      n: pagesize
    }
  });
}

// 智能搜索
export function smartBox(key) {
  return axios.get('/qq/splcloud/fcgi-bin/smartbox_new.fcg', {
    params: {
      key,
      is_xml: 0,
      ...commonParams
    }
  });
}

// 各专题音乐
export function getTopicData(stringfyData) {
  return axios.get('/uqq/cgi-bin/musicu.fcg', {
    params: {
      data: stringfyData,
      ...commonParams
    }
  });
}

// 推荐歌单
export function getPlayList() {
  return getTopicData(recomPlaylist);
}

export function getNewAlbum() {
  return getTopicData(newAlbum)
}
