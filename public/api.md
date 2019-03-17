# 项目使用接口

#### [**原文链接**](https://note.youdao.com/)

#### 获取首页推荐
https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg

#### 获取最新音乐
https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?uin=0&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=27

#### 获取推荐歌曲
https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?notice=0&platform=h5&tpl=3&page=detail&type=top&topid=36

#### 歌曲搜索
https://c.y.qq.com/soso/fcgi-bin/client_search_cp?aggr=1&cr=1&flag_qc=0

必选参数：w（关键词）

可选参数：p（相当于上面的page）
n（相当于上面的pagesize）

eg：
https://c.y.qq.com/soso/fcgi-bin/client_search_cp?aggr=1&cr=1&flag_qc=0&p=1&n=20&w=再飞行

#### 获取歌曲播放链接
首先，我们需要上面API提供的songmid
url：http://ws.stream.qqmusic.qq.com/songmid.m4a
(这里的songmid替换为上面的songmid)

必选参数：

```
fromtag：0
guid：一个随机的9位数
```
eg：
http://ws.stream.qqmusic.qq.com/C100000Fc2iQ4eBEei.m4a?fromtag=0&guid=126548448

#### 获取歌词
获取歌词就比较麻烦了，emm，

首先，我们需要先获取一个vkey：

例如：

https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg?format=json205361747&platform=yqq&cid=205361747&songmid=000Fc2iQ4eBEei&filename=C400000Fc2iQ4eBEei.m4a&guid=1684916857

上面链接中的songmid需要替换为对应的songmid，filename需要替换为对应的C400 + songmid + .m4a

上面的链接会返回一个json字符串文件，其中就有我们要的vkey：



因为QQ音乐还要验证我们的请求头信息，所以简单地在浏览器输入一个url是不能成功的，所以，我们需要使用代码伪装我们的请求头。