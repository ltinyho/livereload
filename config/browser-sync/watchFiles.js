const path   = require('path');
var rootPath = require('../helper').rootPath;

/**
 *
 * @param {string} targetDir
 * @param {array} files
 * @returns {any[]}
 */
function watchFiles(targetDir, files) {
  // 需要监听的目录
  var watchDir = path.resolve(rootPath, '../', targetDir);
// 监听文件的基本路径
  var basePath = path.relative(rootPath, watchDir);
  if (basePath != '') {
    basePath += '/';
  }
  files = files.map(function (val) {
    return basePath + val;
  });
  return files;
}

module.exports = {
  watchFiles
};
