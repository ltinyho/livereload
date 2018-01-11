const path =require('path');
var rootPath = require('../helper').rootPath;

function watchFiles(targetDir) {
  // 需要监听的目录
  var watchDir = path.resolve(rootPath,'../',targetDir);
// 监听文件的基本路径
  var basePath = path.relative(rootPath,watchDir);
  if(basePath!=''){
    basePath+="/"
  }
  var files = [
    "htmltest/**/*.html",
    "new/View/**/*.html",
    "knew/View/**/*.html",
    "source/css/**/*.css",
    "source/js/**/*.js",
    "source/exam/css/dark-theme-mm.css",
    "lzh/**/*.php",
  ].map(function(val){
    return basePath+ val;
  })
  console.log(files)
  return files
}
module.exports = {
  watchFiles
};
