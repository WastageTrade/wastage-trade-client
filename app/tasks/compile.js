var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function() {
  return browserify('./app/wastt.js')
    .bundle()
    .pipe(source('wastt.js'))
    .pipe(gulp.dest('./build/'));
});
