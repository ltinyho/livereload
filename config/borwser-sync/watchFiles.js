var path =require('path');
var rootPath = require('../helper').rootPath;

// 需要监听的目录
var watchDir = path.resolve('/work/web/kaoyayacn');
// 监听文件的基本路径

var basePath = path.relative(rootPath,watchDir);
if(basePath!=''){
  basePath+="/"
}
var watachFiles = [
  "knew/View/**/*.html",
  "source/css/**/*.css",
  "source/js/**/*.js"
].map(function(val){
  return basePath+ val;
})
console.log(watachFiles)
module.exports = watachFiles;