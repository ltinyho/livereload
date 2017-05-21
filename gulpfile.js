var gulp = require('gulp')
var browserSync = require("browser-sync").create();
var borwserSyncConfig = require('./config').borwserSyncConfig;


gulp.task("default",function () {
  browserSync.init(borwserSyncConfig,function () {
  })
})