var path =require('path');
var rootPath = require('../helper').rootPath;

// 需要监听的目录
var watchDir = path.resolve('/work/web/kaoyayacn');
// 监听文件的基本路径
var basePath = path.relative(rootPath,watchDir);

console.log(rootPath);

var watachFiles = [
  "knew/View/Pc/**/*.html",
  "source/**/*.css"
].map((val)=>{
  return basePath+'/' + val;
})
module.exports = watachFiles;