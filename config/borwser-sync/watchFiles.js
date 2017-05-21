var path =require('path');
var rootPath = require('../helper').rootPath;

// 需要监听的目录
var watchDir = path.resolve(rootPath+'/src/');
// 监听文件的基本路径

var basePath = path.relative(rootPath,watchDir);
if(basePath!=''){
  basePath+="/"
}
var watachFiles = [
  "**/*.html",
  "**/*.css",
  "**/*.js"
].map(function(val){
  return basePath+ val;
})
module.exports = watachFiles;