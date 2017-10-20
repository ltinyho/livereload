var gulp = require('gulp')
var browserSync = require("browser-sync").create();
var generateConfig = require('./config').generateConfig;


gulp.task("default",function () {
  browserSync.init(generateConfig('kaoyayacn'),function () {
  })
})
gulp.task("accgg",function () {
  browserSync.init(generateConfig('accgg'),function () {
  })
})