module.exports = {
  devServer: {
    // 设置代理
    proxy: {
      '/qq': {
        target: 'https://c.y.qq.com/', // 域名
        ws: false, // 是否启用websockets
        changOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: {
          '^/qq': '/'
        }
      },
      '/uqq': {
        target: 'https://u.y.qq.com/',
        ws: false,
        changOrigin: true,
        pathRewrite: {
          '^/uqq': '/'
        }
      },
      '/kugou': {
        target: 'http://www.kugou.com/',
        ws: false,
        changOrigin: true,
        pathRewrite: {
          '^/kugou': '/'
        }
      }
    }
  }
};
