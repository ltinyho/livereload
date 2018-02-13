const watchFiles = [
  'htmltest/**/*.html',
  'new/View/**/*.html',
  'knew/View/**/*.html',
  'source/css/**/*.css',
  'source/js/**/*.js',
  'source/exam/css/dark-theme-mm.css',
  'new/Aps/Public/Home/css/layout.css',
  'lzh/**/*.php',
];
module.exports   = [
  {
    // 使用本地主机地址或ip
    // 起始路径
    port: 3000,
    targetDir: 'kaoyayacn',
    watchFiles: watchFiles,
    proxy: 'www.kyy.com',
    startPath: '/knew/pc',
  },
  {
    targetDir: 'accgg',
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
    watchFiles: watchFiles,
  }
];