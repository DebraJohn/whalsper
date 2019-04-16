export const commonParams = {
  g_tk: 5381,
  loginUin: 0,
  hostUin: 0,
  format: 'json',
  inCharset: 'utf8',
  outCharset: 'utf-8',
  notice: 0,
  platform: 'h5',
  needNewCode: 0
};

// 分类
export const category = JSON.stringify({
  category: {
    method: 'get_hot_category',
    module: 'music.web_category_svr',
    param: {
      qq: ''
    }
  }
});

// 新专辑
export const newAlbum = JSON.stringify({
  new_album: {
    method: 'get_new_album_info',
    module: 'newalbum.NewAlbumServer',
    param: {
      area: 1,
      num: 10,
      sin: 0
    }
  }
});

// 新歌
export function newSong(type = 5) {
  return JSON.stringify({
    new_song: {
      method: 'get_new_song_info',
      module: 'newsong.NewSongServer',
      param: {
        type
      }
    }
  });
}

// 最新音乐
const lanlist = {
  neidi: 1,
  oumei: 2,
  riben: 3,
  hanguo: 4,
  new_song: 5
};

// 歌单
export function playList(curPage = 1, size = 5) {
  return JSON.stringify({
    playlist: {
      method: 'get_playlist_by_category',
      module: 'playlist.PlayListPlazaServer',
      param: {
        curPage,
        id: 8,
        order: 5,
        size,
        titleid: 8
      }
    }
  });
}

// 推荐歌单
export const recomPlaylist = JSON.stringify({
  comm: {
    ct: 24
  },
  recomPlaylist: {
    method: 'get_hot_recommend',
    module: 'playlist.HotRecommendServer',
    param: {
      async: 1,
      cmd: 2
    }
  }
});
