var gulp = require('gulp');
var browserSync = require('browser-sync').create();

require('./compile');

gulp.task('browser-sync', ['browserify'], function() {
  browserSync.init({
    server: {
      baseDir: "./app/",
      routes: {
        "/app": "./app",
        "/styles": "./bower_components",
        "/scripts": "./build/"
      }
    }
  });

  gulp.watch("./app/assets/**/*.css").on('change', browserSync.reload);
  gulp.watch("./app/*.html").on('change', browserSync.reload);
});
