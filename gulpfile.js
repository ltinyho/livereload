var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var tasks       = require('./env.js');
var watchFiles  = require('./config/browser-sync/watchFiles').watchFiles;
tasks.forEach((item) => {

  gulp.task(item.targetDir, function () {
    
    let config       = {
      // 监控的文件
      /* server: {
         baseDir: "src/",
         index: "index.html"
       },*/
      notify: false,
      scrollProportionally: true, //视口同步到顶部位置
      browser: ['google chrome'],
      files: watchFiles(item.targetDir, item.watchFiles),
    };
    config.port      = item.port;
    config.startPath = item.startPath;
    config.proxy     = item.proxy;
    browserSync.init(config, function () {
    });
  });
});

/*gulp.task("accgg",function () {
  browserSync.init(generateConfig('accgg'),function () {
  })
})

gulp.task("default",function () {
  browserSync.init(generateConfig('kaoyayacn'),function () {
  })
})*/
