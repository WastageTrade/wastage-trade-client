var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('sync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  process.on('exit', browserSync.exit);
});

gulp.task('default', ['sync']);
