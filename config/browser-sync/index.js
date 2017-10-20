var watchFiles = require('./watchFiles').watchFiles

function generateConfig(target) {
  const _config = {
    kaoyayacn: {
      // 使用本地主机地址或ip
      proxy: 'www.kyy.com',
      // 起始路径
      startPath: '/knew/pc',
      // 监控的文件
      /* server: {
         baseDir: "src/",
         index: "index.html"
       },*/
      files: watchFiles('kaoyayacn'),
    },
    accgg: {
      port: 4000,
      // 使用本地主机地址或ip
      proxy: 'lzh.acc.com',
      // 起始路径
      startPath: '/knew/pc',
      // 监控的文件
      /* server: {
         baseDir: "src/",
         index: "index.html"
       },*/
      files: watchFiles('accgg'),
    }
  }

  const config = Object.assign({}, {
    //不显示在浏览器中的任何通知。
    notify: false,
    scrollProportionally: true, //视口同步到顶部位置
    browser: ['google-chrome']
  }, _config[target])
  return config
}

module.exports = {
  generateConfig
}
